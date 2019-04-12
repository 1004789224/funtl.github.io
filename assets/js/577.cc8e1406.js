(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{763:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"创建文章服务提供者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建文章服务提供者","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建文章服务提供者")]),s._v(" "),a("h2",{attrs:{id:"本节视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/av29283827",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】项目实战-iToken-文章服务-提供者"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),a("p",[s._v("创建一个名为 "),a("code",[s._v("itoken-service-posts")]),s._v(" 的服务提供者项目")]),s._v(" "),a("h2",{attrs:{id:"服务所需数据库脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务所需数据库脚本","aria-hidden":"true"}},[s._v("#")]),s._v(" 服务所需数据库脚本")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/*\nSQLyog  v12.2.6 (64 bit)\nMySQL - 5.7.22 : Database - itoken-service-admin\n*********************************************************************\n*/\n\n\n/*!40101 SET NAMES utf8 */;\n\n/*!40101 SET SQL_MODE=''*/;\n\n/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;\n/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;\n/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;\n/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;\nCREATE DATABASE /*!32312 IF NOT EXISTS*/`itoken-service-posts` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;\n\nUSE `itoken-service-posts`;\n\nDROP TABLE IF EXISTS tb_posts_post;\n\n-- 文章表\nCREATE TABLE tb_posts_post\n(\n\tpost_guid varchar(100) NOT NULL COMMENT '文章编码',\n    title varchar(100) NOT NULL COMMENT '文章标题',\n    time_published datetime NOT NULL COMMENT '文章发布时间',\n    status char NOT NULL COMMENT '文章状态（0草稿 1已发布的文章 2待审核的文章 3被拒绝文章 4定时发布的文章）',\n    alias varchar(100) COMMENT '文章别名',\n    score decimal(3) DEFAULT 0 COMMENT '文章得分',\n    summary text COMMENT '文章摘要',\n    main text COMMENT '文章正文',\n    authors text COMMENT '文章作者对象',\n    thumb_image text COMMENT '封面缩略图片',\n    original_images text COMMENT '裁剪后不带尺寸的正文图片数组',\n    images text COMMENT '裁剪后带尺寸的正文图片数组',\n    full_size_images text COMMENT '裁剪前的正文图片数组',\n    tags text COMMENT '文章标签',\n    v_tags text COMMENT '文章特色标签',\n    number_of_upvotes decimal(9) DEFAULT 0 COMMENT '被赞数',\n    number_of_downvotes decimal(9) DEFAULT 0 COMMENT '被踩数',\n    number_of_reads decimal(9) DEFAULT 0 COMMENT '被阅读数',\n    number_of_shares decimal(9) DEFAULT 0 COMMENT '被分享数',\n    number_of_bookmarks decimal(9) DEFAULT 0 COMMENT '被收藏数',\n    number_of_comments decimal(9) DEFAULT 0 COMMENT '被评论数',\n    reject_msg varchar(100) COMMENT '文章审核被拒理由',\n    series text COMMENT '一篇文章的系列集合',\n    access char(2) COMMENT '文章的阅读权限（0无限制 1会员）',\n\tcreate_by varchar(64) NOT NULL COMMENT '创建者',\n\tcreate_date datetime NOT NULL COMMENT '创建时间',\n\tupdate_by varchar(64) NOT NULL COMMENT '更新者',\n\tupdate_date datetime NOT NULL COMMENT '更新时间',\n\tremarks varchar(500) COMMENT '备注信息',\n\textend_s1 varchar(500) COMMENT '扩展 String 1',\n\textend_s2 varchar(500) COMMENT '扩展 String 2',\n\textend_s3 varchar(500) COMMENT '扩展 String 3',\n\textend_s4 varchar(500) COMMENT '扩展 String 4',\n\textend_s5 varchar(500) COMMENT '扩展 String 5',\n\textend_s6 varchar(500) COMMENT '扩展 String 6',\n\textend_s7 varchar(500) COMMENT '扩展 String 7',\n\textend_s8 varchar(500) COMMENT '扩展 String 8',\n\textend_i1 decimal(19) COMMENT '扩展 Integer 1',\n\textend_i2 decimal(19) COMMENT '扩展 Integer 2',\n\textend_i3 decimal(19) COMMENT '扩展 Integer 3',\n\textend_i4 decimal(19) COMMENT '扩展 Integer 4',\n\textend_f1 decimal(19,4) COMMENT '扩展 Float 1',\n\textend_f2 decimal(19,4) COMMENT '扩展 Float 2',\n\textend_f3 decimal(19,4) COMMENT '扩展 Float 3',\n\textend_f4 decimal(19,4) COMMENT '扩展 Float 4',\n\textend_d1 datetime COMMENT '扩展 Date 1',\n\textend_d2 datetime COMMENT '扩展 Date 2',\n\textend_d3 datetime COMMENT '扩展 Date 3',\n\textend_d4 datetime COMMENT '扩展 Date 4',\n\tPRIMARY KEY (post_guid)\n) COMMENT = '文章表';\n\nCREATE INDEX idx_posts_post_pg ON tb_posts_post (post_guid ASC);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br")])])])},[],!1,null,null,null);n.default=e.exports}}]);