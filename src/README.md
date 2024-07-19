---
home: true
icon: home-fill
title: 首页
heroImage: /home.png
heroText: warm-flow工作流
tagline: Warm-Flow国产工作流引擎🎉，其特点简洁轻量但又不简单，五脏俱全，组件独立，可扩展，可满足中小项目的组件。
actions:

- text: 开始学习 ➜
  link: /guide/introduction.html
  type: primary

- text: 功能演示
  link: /guide/processdemo.html

features:

- title: 简洁易用
  icon: '/icons/concise.svg'
  details: 只有7张表，代码量少，可快速上手和集成

- title: 审批功能
  icon: '/icons/approval.svg'
  details: 支持通过、退回、任意跳转、转办、终止、会签、票签、委派和加减签

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
  details: 目前支持MyBatis、Mybatis-Plus、Mybatis-Flex和Jpa，后续会由社区提供其他支持，扩展方便

- title: 数据库
  icon: '/icons/database.svg'
  details: 目前支持MySQL 、Oracle 和PostgreSQL，后续会继续支持其他数据库或者国产数据库

- title: 多租户与软删除
  icon: '/icons/maintenance.svg'
  details: 流程引擎自身维护多租户和软删除实现，也可使用对应orm框架的实现方式

copyright: false
footer: Copyright © 2024 warm-flow

---

## **🚀Dromara成员项目**
<div v-html="content"></div>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            content: ''
        }
    },
    async mounted() {
        try {
            const response = await axios.get('https://x-file-storage.xuyanwu.cn/assets/link/member-project-pure.md');
            this.content = response.data;
        } catch (error) {
            console.error('Failed to fetch external markdown:', error);
        }
    }

}
</script>

