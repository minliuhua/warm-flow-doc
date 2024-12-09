---
home: true
icon: home
title: 首页
bgImage: /bg.png
heroFullScreen: true
breadcrumbExclude: true
heroText: Warm-Flow工作流
tagline:
  国产工作流引擎，简洁轻量，五脏俱全，灵活扩展，可快速集成设计器
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

highlights:
  - header: Warm-Flow 特性
    features:
      - title: 🔅 简洁易用
        link: /master/primary/table.md
        details: 只有7张表，代码量少，可快速上手和集成

      - title: 🤏 审批功能
        link: http://www.warm-flow.cn/master/primary/started.html#_4%E3%80%81%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B
        details: 支持通过、退回、任意跳转、转办、终止、会签、票签、委派和加减签、互斥和并行网关

      - title: 🎐 流程变量
        link: /master/primary/variable.md
        details: 流程变量，map类型，用于流程执行中的数据转递
        
      - title: 🦻 监听器
        link: /master/advanced/listener.md
        details: 支持四种监听器和不同颗粒的的作用范围，支持spel表达式，灵活可扩展，参数传递，动态权限

      - title: 💯 流程设计器
        link: /master/primary/designerIntroduced.md
        details: 可通过jar包形式快速集成到项目，减少繁琐代码搬运和适配，支持solon和springboot

      - title: 👍 流程图
        details: 流程引擎自带流程图，可在不集成流程设计器情况下使用

      - title: 🔦 条件表达式
        link: /master/primary/condition.md
        details: 内置常见的和spel条件表达式，并且支持自定义扩展

      - title: ↔️ 办理人变量表达式
        link: /master/advanced/variableStategy.md
        details: 内置${handler}和spel格式的表达式，可满足不同场景，灵活可扩展

      - title: 🌎 orm框架扩展
        link: http://www.warm-flow.cn/common/introduction.html#_6%E3%80%81%E6%94%AF%E6%8C%81orm%E6%A1%86%E6%9E%B6%E7%B1%BB%E5%9E%8B
        details: 目前支持MyBatis、Mybatis-Plus、Mybatis-Flex、Jpa和Easy-Query，后续会由社区提供其他支持，扩展方便

      - title: 🎬 数据库支持
        link: http://www.warm-flow.cn/common/introduction.html#_5%E3%80%81%E6%94%AF%E6%8C%81%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B1%BB%E5%9E%8B
        details: 目前支持MySQL 、Oracle 和PostgreSQL，后续会继续支持其他数据库或者国产数据库

      - title: 🏋 多租户
        link: /master/advanced/tenant.md
        details: 流程引擎自身维护多租户实现，也可使用对应orm框架的实现方式
        
      - title: ✖️ 软删除
        link: /master/advanced/logicdelete.md
        details: 流程引擎自身维护软删除实现，也可使用对应orm框架的实现方式


copyright: false
footer: © 2024 Warm-Flow Project. All Rights Reserved Designed by <a href="https://gitee.com/min290">xiaohua</a> Member of <a href="https://dromara.org.cn/">Dromara</a> <br><a href="https://beian.miit.gov.cn/">赣ICP备2021008655号-3</a>

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
import { ref, onMounted } from 'vue';
 
export default {
  setup() {
    const projectList = ref([]);
    const links = ref();

    const fetchData = async () => {
      projectList.value = [
        { href: "https://item.jd.com/13928958.html", src: "/yqlj/flowableHb.jpg", alt: "open-capacity-platform", title: "对flowable有兴趣的朋友可以购买贺波老师的书《深入flowable流程引擎》" },
        { href: "http://www.easy-query.com/easy-query-doc/", src: "/yqlj/easy-query.png", alt: "open-capacity-platform", title: "java下唯一一款同时支持强类型对象关系查询和强类型SQL语法查询的ORM,拥有对象模型筛选、隐式子查询、隐式join、显式子查询、显式join,支持Java/Kotlin" },
      ];
    };

    const navigateTo = () => {
      const pElement = document.querySelector('.vp-hero-actions');

      // 定义要追加的内容
      var contentToAppend = `        <p>
          <a href="https://gitee.com/dromara/warm-flow.git" style="margin-left: 12px;"><img src="https://gitee.com/dromara/warm-flow/badge/star.svg?theme=dark"></a>
          <a href='https://gitee.com/dromara/warm-flow/members'><img src='https://gitee.com/dromara/warm-flow/badge/fork.svg?theme=dark' alt='fork'></a>
          <a href='https://github.com/dromara/warm-flow.git'><img src='https://img.shields.io/github/stars/dromara/warm-flow.svg' alt='fork'></a>
          <a href='https://github.com/dromara/warm-flow.git'><img src='https://img.shields.io/github/forks/dromara/warm-flow.svg' alt='fork'></a>
          <a href='https://gitcode.com/dromara/warm-flow'><img src='https://gitcode.com/dromara/warm-flow/star/badge.svg' alt='fork'></a>
          <a href='https://gitee.com/dromara/warm-flow/blob/master/LICENSE'><img src='https://img.shields.io/badge/License-Apache2.0-blue.svg' alt='fork'></a>
        </p>
      `;

      // 使用 innerHTML 追加内容
      if (pElement) {
        pElement.insertAdjacentHTML('afterend', contentToAppend);
      } else {
        console.error('.vp-hero-actions 元素未找到');
      }

      const element = document.querySelector('.main-description');
      const text = element.textContent;
      let index = 0;
    
      element.textContent = ''; // 清空原始文本
    
      function typeWriter() {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(typeWriter, 100); // 每100毫秒显示一个字符
        }
      }
    
      typeWriter();
    };

    onMounted(() => {
      fetchData();
      navigateTo();
    });

    return {
      projectList,
      links,
    };
  },
};
</script>

---
