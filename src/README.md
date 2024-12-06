---
home: true
icon: home
title: 首页
bgImage: /bg.png
heroFullScreen: true
breadcrumbExclude: true
heroText: Warm-Flow工作流
tagline:
  Warm-Flow国产工作流引擎🎉，其特点简洁轻量，五脏俱全，可扩展，是一个可通过jar引入设计器的工作流
actions:
- text: GitHub
  link: https://github.com/dromara/warm-flow.git
  type: success
  icon: /icons/github_home.svg

- text: Gitee
  link: https://gitee.com/dromara/warm-flow.git
  type: success
  icon: /icons/gitee_home.svg
  
- text: GitCode
  link: https://gitcode.com/dromara/warm-flow
  type: success
  icon: /icons/gitcode_home.svg
  
- text: 开始学习 ➜
  link: /common/introduction.html
  type: primary  

- text: 
  link: https://gitee.com/dromara/warm-flow.git
  type: success
  icon: https://gitee.com/dromara/warm-flow/badge/star.svg?theme=dark
  
- text:
  link: https://gitee.com/dromara/warm-flow/members
  type: success
  icon: https://gitee.com/dromara/warm-flow/badge/fork.svg?theme=dark
  
- text:
  link: https://github.com/dromara/warm-flow.git
  type: success
  icon: https://img.shields.io/github/stars/dromara/warm-flow.svg
  
- text:
  link: https://github.com/dromara/warm-flow.git
  type: success
  icon: https://img.shields.io/github/forks/dromara/warm-flow.svg
  
- text:
  link: https://gitcode.com/dromara/warm-flow
  type: success
  icon: https://gitcode.com/dromara/warm-flow/star/badge.svg
  
- text:
  link: https://gitee.com/dromara/warm-flow/blob/master/LICENSE
  type: success
  icon: https://img.shields.io/badge/License-Apache2.0-blue.svg

highlights:
  - header: Warm-Flow 特性
    features:
      - title: 🔅 简洁易用
        details: 只有7张表，代码量少，可快速上手和集成

      - title: 🤏 审批功能
        details: 支持通过、退回、任意跳转、转办、终止、会签、票签、委派和加减签、互斥和并行网关

      - title: 🦻 监听器与流程变量
        details: 支持四种监听器和不同颗粒的的作用范围，支持spel表达式，灵活可扩展，参数传递，动态权限

      - title: 💯 流程设计器
        details: 可通过jar包形式快速集成到项目，减少繁琐代码搬运和适配，支持solon和springboot

      - title: 👍 流程图
        details: 流程引擎自带流程图，可在不集成流程设计器情况下使用

      - title: 🔦 条件表达式
        details: 内置常见的和spel条件表达式，并且支持自定义扩展

      - title: ↔️ 办理人变量表达式
        details: 内置${handler}和spel格式的表达式，可满足不同场景，灵活可扩展

      - title: 🌎 orm框架扩展
        details: 目前支持MyBatis、Mybatis-Plus、Mybatis-Flex、Jpa和Easy-Query，后续会由社区提供其他支持，扩展方便

      - title: 🎬 数据库支持
        details: 目前支持MySQL 、Oracle 和PostgreSQL，后续会继续支持其他数据库或者国产数据库

      - title: 🏋 多租户与软删除
        details: 流程引擎自身维护多租户和软删除实现，也可使用对应orm框架的实现方式


copyright: false
footer: © 2024 Warm-Flow Project. All Rights Reserved Designed by xiaohua Member of Dromara <br>赣ICP备2021008655号-3

---

## **👍友情链接**

<style>
  .vp-feature-item:hover {
    background-color: var(--bg-color-secondary);
    box-shadow: 0 2px 12px 0 var(--card-shadow);
    transform: translate(-2px, -2px);
    transform: scale(1.05);
  }
    .links {
        display: flex;
        flex-wrap: wrap;
    }

    .links a {
        padding: 10px;
    }

    .links a img {
        width: 200px !important;
        height: 200px !important;
    }
    .vp-feature-item:hover {
    background-color: var(--bg-color-secondary);
    box-shadow: 0 2px 12px 0 var(--card-shadow);
    transform: translate(-2px, -2px);
    transform: scale(1.05);
  }

  .links {
    display: flex;
    flex-wrap: wrap;
  }

  .links a {
    padding: 10px;
  }

  .links a img {
    width: 200px !important;
    height: 200px !important;
  }

</style>

<div class="links">
    <a :href="item.href" target="_blank" v-for="item in projectList" :key="item.href">
      <img :src="item.src" :alt="item.alt" :title="item.title">
    </a>
</div>

<script>

export default {
    data() {
        return {
            projectList: [
              { href: "https://item.jd.com/13928958.html", src: "/yqlj/flowableHb.jpg", alt: "open-capacity-platform", title: "对flowable有兴趣的朋友可以购买贺波老师的书《深入flowable流程引擎》" },
              { href: "http://www.easy-query.com/easy-query-doc/", src: "/yqlj/easy-query.png", alt: "open-capacity-platform", title: "java下唯一一款同时支持强类型对象关系查询和强类型SQL语法查询的ORM,拥有对象模型筛选、隐式子查询、隐式join、显式子查询、显式join,支持Java/Kotlin" },
            ]
        }
    },
}
</script>

---
