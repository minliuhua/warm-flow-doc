---
home: true
icon: home-fill
title: 首页
heroImage: /home.png
heroText: warm-flow工作流
tagline: Warm-Flow国产工作流引擎🎉，其特点简洁轻量但又不简单，五脏俱全，组件独立，可扩展，可满足中小项目的组件。
actions:

- text: GitHub
  link: https://github.com/dromara/warm-flow.git
  type: success

- text: Gitee
  link: https://gitee.com/dromara/warm-flow.git
  type: success
  
- text: GitCode
  link: https://gitcode.com/dromara/warm-flow
  type: success
  
- text: 开始学习 ➜
  link: /common/introduction.html
  type: primary  


features:

- title: 简洁易用
  icon: '/icons/concise.svg'
  details: 只有7张表，代码量少，可快速上手和集成

- title: 审批功能
  icon: '/icons/approval.svg'
  details: 支持通过、退回、任意跳转、转办、终止、会签、票签、委派和加减签、互斥和并行网关

- title: 监听器与流程变量
  icon: '/icons/listener.svg'
  details: 支持五种监听器，可应对不同场景，灵活可扩展，参数传递，动态权限
  
- title: 流程图
  icon: '/icons/flowchart.svg'
  details: 流程引擎自带流程图，可在不集成流程设计器情况下使用

- title: 条件表达式
  icon: '/icons/condition.svg'
  details: 内置常见的条件表达式，并且支持自定义扩展
  
- title: orm框架扩展
  icon: '/icons/extend.svg'
  details: 目前支持MyBatis、Mybatis-Plus、Mybatis-Flex、Jpa和Easy-Query，后续会由社区提供其他支持，扩展方便

- title: 数据库支持
  icon: '/icons/database.svg'
  details: 目前支持MySQL 、Oracle 和PostgreSQL，后续会继续支持其他数据库或者国产数据库

- title: 多租户与软删除
  icon: '/icons/maintenance.svg'
  details: 流程引擎自身维护多租户和软删除实现，也可使用对应orm框架的实现方式

copyright: false
footer: Copyright © 2024 warm-flow｜赣ICP备2021008655号-3

---
## **👍友情链接**
<style>
    .links {
        display: flex;
        flex-wrap: wrap;
    }

    .links a {
        padding: 10px;
    }

    .links a img {
        height: 200px !important;
    }
</style>

<div class="links">
    <a :href="item.href" target="_blank" v-for="item in projectList" :key="item.href">
      <img :src="item.src" :alt="item.alt" :title="item.title">
    </a>
</div>

<script>

import imageSrc from '/flowableHb.jpg';

export default {
    data() {
        return {
            projectList: [
              { href: "https://item.jd.com/13928958.html", src: imageSrc, alt: "open-capacity-platform", title: "对flowable有兴趣的朋友可以购买贺波老师的书《深入flowable流程引擎》" },
            ]
        }
    },
}
</script>

---