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
  link: /master/introduction/introduction.html
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

  - header: 加入群聊
    description: 有❓疑问❓先看<a href="http://www.warm-flow.cn/common/troubleshooting.html">常见问题</a>，然后再是提👉 <a href="https://gitee.com/dromara/warm-flow/issues">issue</a> 👈
    image: http://www.warm-flow.cn/assets/wxqun-HDESafl7.jpg
    bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
    
    highlights:
      - title: 微信公众号
        icon: circle-half-stroke
        details: warm-flow工作流

      - title: 微信号
        icon: palette
        details: warm-houhou

      - title: qq群
        icon: ellipsis
        details: 778470567

copyright: false
footer: © 2024 Warm-Flow Project. All Rights Reserved Designed by <a href="https://gitee.com/min290">xiaohua</a> Member of <a href="https://dromara.org.cn/">Dromara</a> <br><a href="https://beian.miit.gov.cn/">赣ICP备2021008655号-3</a>

---


---
<div class="com-box-f s-width">
    <div class="s-fenge"></div>
    <br><strong style="font-size: 30px;">优秀开源集成案例</strong><br><br><br>
    <div class="com-box com-box-you table-show-pj">
        <SiteInfo
            name="hh-vue"
            desc="官方集成案例:springboot2+vue2"
            url="http://www.hhzai.top/"
            logo="http://localhost:8081/logo.png"
            repo="https://gitee.com/min290/hh-vue.git"
            preview="https://foruda.gitee.com/images/1734069989612682159/d8370b7a_2218307.png"
        />
        <SiteInfo
            name="seaflow"
            desc="seaflow 是一款 开源仿钉钉工作流 平台， 前端使用 vue3+element plus ， 实现 流程设计和审批功能， 后端基于国产工作流warm-flow 实现流程控制， 大大缩短了学习成本"
            url="http://124.222.180.108:8999/"
            logo="https://foruda.gitee.com/images/1724129097682545577/22d88a87_2218307.png"
            repo="https://gitee.com/qq75547276/seaflow"
            preview="https://foruda.gitee.com/images/1734071245444213365/6827b6a0_1251122.png"
        />
        <SiteInfo
            name="RuoYi-Vue3"
            desc="官方集成案例:vue3前端"
            url="http://www.hhzai.top/"
            logo="http://localhost:8081/logo.png"
            repo="https://gitee.com/min290/RuoYi-Vue3.git"
            preview="https://foruda.gitee.com/images/1734069989612682159/d8370b7a_2218307.png"
        />
    </div>
    <div style="height: 10px; clear: both;"></div>
    <p>
    	（如果您的开源项目也使用了 Warm-Flow，您可以 <a href="https://gitee.com/dromara/warm-flow/issues/IBB37F" target="_blank">在此</a> 提交）
    </p>
    <p>
    	（更多开源项目详情，您可以 <a href="/common/projectexample.html" target="_blank">在此</a> 查看）
    </p>
</div>

---
<div class="com-box-f s-width">
    <div class="s-fenge"></div>
    <br><strong style="font-size: 30px;">正在使用 Warm-Flow 的企业 / 个人（24家）</strong><br><br><br>
    <div class="com-box com-box-you table-show-pj">
        <a href="https://maxkey.top/" target="_blank">
    		<img class="lazy" data-original="https://www.bankoffs.com.cn/" title="抚顺银行" src="https://foruda.gitee.com/images/1724129406609614381/b3e2d2aa_2218307.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/TLog" target="_blank">
    		<img class="lazy" data-original="https://www.sneb.com.cn/zhgj/index_2578.html" title="中交武汉智行国际" src="https://foruda.gitee.com/images/1732083419998818655/3e444f08_2218307.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/liteFlow" target="_blank">
    		<img class="lazy" data-original="https://www.xly-net.com/login" title="新理益智慧网络科技（重庆）有限公司" src="https://foruda.gitee.com/images/1732083517105041838/b685e15c_2218307.png" style="">
    	</a>
    	<a href="https://hutool.cn/" target="_blank">
    		<img class="lazy" data-original="https://www.ctcemti.com" title="安徽数智建造研究院有限公司" src="https://foruda.gitee.com/images/1724128444763892376/f5925815_2218307.png" style="">
    	</a>
    	<a href="https://sa-token.cc/" target="_blank">
    		<img class="lazy" data-original="http://www.3into1.cn" title="杭州三之一智联科技有限公司" src="https://foruda.gitee.com/images/1724128656910849672/05712913_2218307.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/hmily" target="_blank">
    		<img class="lazy" data-original="https://ruyangkeji.com/" title="郑州如阳科技有限公司" src="https://foruda.gitee.com/images/1724128729136918262/f79703a0_2218307.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/Raincat" target="_blank">
    		<img class="lazy" data-original="https://www.runyoucloud.com" title="山东融佑信息科技有限公司" src="https://foruda.gitee.com/images/1724129195385753446/c9b9b908_2218307.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/myth" target="_blank">
    		<img class="lazy" data-original="http://www.aiwld.com.cn" title="陕西物联达智能科技有限公司" src="https://foruda.gitee.com/images/1724129259885472852/d538bd26_2218307.png" style="">
    	</a>
    	<a href="https://cubic.jiagoujishu.com/" target="_blank">
    		<img class="lazy" data-original="http://www.h5ve.com" title="H5VE团队" src="https://foruda.gitee.com/images/1724129316656246511/9f588786_2218307.png" style="">
    	</a>
    	<a href="http://forest.dtflyx.com/" target="_blank">
    		<img class="lazy" data-original="https://gitee.com/qq75547276/openflow-admin" title="武汉数演科技有限公司" nf="" src="https://foruda.gitee.com/images/1724129097682545577/22d88a87_2218307.png" style="">
    	</a>
    	<a href="https://jpom.top/" target="_blank">
    		<img class="lazy" data-original="" title="半月无霜" src="http://localhost:8081/logo.png" style="">
    	</a>
        <a href="https://jpom.top/" target="_blank">
    		<img class="lazy" data-original="" title="图灵谷" src="http://localhost:8081/logo.png" style="">
    	</a>
    </div>
    <div style="height: 10px; clear: both;"></div>
    <p>
    	（如果您的企业也使用了 Warm-Flow，您可以 <a href="https://gitee.com/dromara/warm-flow/issues/I7Y57D" target="_blank">在此</a> 提交）
    </p>
    <p>
    	（更多使用企业/个人详情，您可以 <a href="/common/companyintegration.md" target="_blank">在此</a> 查看）
    </p>
</div>

---
<div class="com-box-f s-width">
    <div class="s-fenge"></div>
    <br><strong style="font-size: 30px;">Dromara 成员项目</strong><br><br><br>
    <div class="com-box com-box-you table-show-pj">
    	<a href="https://gitee.com/dromara/TLog" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/tlog.png" title="一个轻量级的分布式日志标记追踪神器，10分钟即可接入，自动对日志打标签完成微服务的链路追踪" src="https://oss.dev33.cn/sa-token/link/tlog.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/liteFlow" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/liteflow.png" title="轻量，快速，稳定，可编排的组件式流程引擎" src="https://oss.dev33.cn/sa-token/link/liteflow.png" style="">
    	</a>
    	<a href="https://hutool.cn/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/hutool.jpg" title="小而全的Java工具类库，使Java拥有函数式语言般的优雅，让Java语言也可以“甜甜的”。" src="https://oss.dev33.cn/sa-token/link/hutool.jpg" style="">
    	</a>
    	<a href="https://sa-token.cc/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/sa-token.png" title="一个轻量级 java 权限认证框架，让鉴权变得简单、优雅！" src="https://oss.dev33.cn/sa-token/link/sa-token.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/hmily" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/hmily.png" title="高性能一站式分布式事务解决方案。" src="https://oss.dev33.cn/sa-token/link/hmily.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/Raincat" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/raincat.png" title="强一致性分布式事务解决方案。" src="https://oss.dev33.cn/sa-token/link/raincat.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/myth" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/myth.png" title="可靠消息分布式事务解决方案。" src="https://oss.dev33.cn/sa-token/link/myth.png" style="">
    	</a>
    	<a href="https://cubic.jiagoujishu.com/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/cubic.png" title="一站式问题定位平台，以agent的方式无侵入接入应用，完整集成arthas功能模块，致力于应用级监控，帮助开发人员快速定位问题" src="https://oss.dev33.cn/sa-token/link/cubic.png" style="">
    	</a>
    	<a href="https://maxkey.top/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/maxkey.png" title="业界领先的身份管理和认证产品" src="https://oss.dev33.cn/sa-token/link/maxkey.png" style="">
    	</a>
    	<a href="http://forest.dtflyx.com/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/forest-logo.png" title="Forest能够帮助您使用更简单的方式编写Java的HTTP客户端" nf="" src="https://oss.dev33.cn/sa-token/link/forest-logo.png" style="">
    	</a>
    	<a href="https://jpom.top/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/jpom.png" title="一款简而轻的低侵入式在线构建、自动部署、日常运维、项目监控软件" src="https://oss.dev33.cn/sa-token/link/jpom.png" style="">
    	</a>
    	<a href="https://su.usthe.com/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/sureness.png" title="面向 REST API 的高性能认证鉴权框架" src="https://oss.dev33.cn/sa-token/link/sureness.png" style="">
    	</a>
    	<a href="https://easy-es.cn/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/easy-es2.png" title="傻瓜级ElasticSearch搜索引擎ORM框架" src="https://oss.dev33.cn/sa-token/link/easy-es2.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/northstar" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/northstar_logo.png" title="Northstar盈富量化交易平台" src="https://oss.dev33.cn/sa-token/link/northstar_logo.png" style="">
    	</a>
    	<a href="https://dromara.gitee.io/fast-request/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/fast-request.gif" title="Idea 版 Postman，为简化调试API而生" src="https://oss.dev33.cn/sa-token/link/fast-request.gif" style="">
    	</a>
    	<a href="https://www.jeesuite.com/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/mendmix.png" title="开源分布式云原生架构一站式解决方案" src="https://oss.dev33.cn/sa-token/link/mendmix.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/koalas-rpc" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/koalas-rpc2.png" title="企业生产级百亿日PV高可用可拓展的RPC框架。" src="https://oss.dev33.cn/sa-token/link/koalas-rpc2.png" style="">
    	</a>
    	<a href="https://async.sizegang.cn/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/gobrs-async.png" title="配置极简功能强大的异步任务动态编排框架" src="https://oss.dev33.cn/sa-token/link/gobrs-async.png" style="">
    	</a>
    	<a href="https://dynamictp.cn/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/dynamic-tp.png" title="基于配置中心的轻量级动态可监控线程池" src="https://oss.dev33.cn/sa-token/link/dynamic-tp.png" style="">
    	</a>
    	<a href="https://www.x-easypdf.cn" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/x-easypdf.png" title="一个用搭积木的方式构建pdf的框架（基于pdfbox）" src="https://oss.dev33.cn/sa-token/link/x-easypdf.png" style="">
    	</a>
    	<a href="http://dromara.gitee.io/image-combiner" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/image-combiner.png" title="一个专门用于图片合成的工具，没有很复杂的功能，简单实用，却不失强大" src="https://oss.dev33.cn/sa-token/link/image-combiner.png" style="">
    	</a>
    	<a href="https://www.herodotus.cn/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/dante-cloud2.png" title="Dante-Cloud 是一款企业级微服务架构和服务能力开发平台。" src="https://oss.dev33.cn/sa-token/link/dante-cloud2.png" style="">
    	</a>
    	<a href="http://www.mtruning.club" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/go-view.png" title="低代码数据可视化开发平台" src="https://oss.dev33.cn/sa-token/link/go-view.png" style="">
    	</a>
    	<a href="https://tangyh.top/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/lamp-cloud.png" title="微服务中后台快速开发平台，支持租户(SaaS)模式、非租户模式" src="https://oss.dev33.cn/sa-token/link/lamp-cloud.png" style="">
    	</a>
    	<a href="https://www.redisfront.com/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/redis-front.png" title="RedisFront 是一款开源免费的跨平台 Redis 桌面客户端工具, 支持单机模式, 集群模式, 哨兵模式以及 SSH 隧道连接, 可轻松管理Redis缓存数据." src="https://oss.dev33.cn/sa-token/link/redis-front.png" style="">
    	</a>
    	<a href="https://www.yuque.com/u34495/mivcfg" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/electron-egg.png" title="一个入门简单、跨平台、企业级桌面软件开发框架" src="https://oss.dev33.cn/sa-token/link/electron-egg.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/open-capacity-platform" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/open-capacity-platform.jpg" title="简称ocp是基于Spring Cloud的企业级微服务框架(用户权限管理，配置中心管理，应用管理，....)" src="https://oss.dev33.cn/sa-token/link/open-capacity-platform.jpg" style="">
    	</a>
    	<a href="http://easy-trans.fhs-opensource.top/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/easy_trans.png" title="Easy-Trans 一个注解搞定数据翻译,减少30%SQL代码量" src="https://oss.dev33.cn/sa-token/link/easy_trans.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/neutrino-proxy" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/neutrino-proxy.svg" title="一款基于 Netty 的、开源的内网穿透神器。" src="https://oss.dev33.cn/sa-token/link/neutrino-proxy.svg" style="">
    	</a>
    	<!-- <a href="https://chatgpt.cn.obiscr.com/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/chatgpt.png"
    			title="一个支持在 JetBrains 系列 IDE 上运行的 ChatGPT 的插件。">
    	</a> -->
    	<a href="https://gitee.com/dromara/zyplayer-doc" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/zyplayer-doc.png" title="zyplayer-doc是一款适合团队和个人使用的WIKI文档管理工具，同时还包含数据库文档、Api接口文档。" src="https://oss.dev33.cn/sa-token/link/zyplayer-doc.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/payment-spring-boot" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/payment-spring-boot.png" title="最全最好用的微信支付V3 Spring Boot 组件。" src="https://oss.dev33.cn/sa-token/link/payment-spring-boot.png" style="">
    	</a>
    	<a href="https://www.j2eefast.com/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/j2eefast.png" title="J2eeFAST 是一个致力于中小企业 Java EE 企业级快速开发平台,我们永久开源!" src="https://oss.dev33.cn/sa-token/link/j2eefast.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/data-compare" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/dataCompare.png" title="数据库比对工具：hive 表数据比对，mysql、Doris 数据比对，实现自动化配置进行数据比对，避免频繁写sql 进行处理，低代码(Low-Code) 平台" src="https://oss.dev33.cn/sa-token/link/dataCompare.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/open-giteye-api" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/open-giteye-api.svg" title="giteye.net 是专为开源作者设计的数据图表服务工具类站点，提供了包括 Star 趋势图、贡献者列表、Gitee指数等数据图表服务。" src="https://oss.dev33.cn/sa-token/link/open-giteye-api.svg" style="">
    	</a>
    	<a href="https://gitee.com/dromara/RuoYi-Vue-Plus" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/RuoYi-Vue-Plus.png" title="后台管理系统 重写 RuoYi-Vue 所有功能 集成 Sa-Token + Mybatis-Plus + Jackson + Xxl-Job + SpringDoc + Hutool + OSS 定期同步" src="https://oss.dev33.cn/sa-token/link/RuoYi-Vue-Plus.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/RuoYi-Cloud-Plus" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/RuoYi-Cloud-Plus.png" title="微服务管理系统 重写RuoYi-Cloud所有功能 整合 SpringCloudAlibaba Dubbo3.0 Sa-Token Mybatis-Plus MQ OSS ES Xxl-Job Docker 全方位升级 定期同步" src="https://oss.dev33.cn/sa-token/link/RuoYi-Cloud-Plus.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/stream-query" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/stream-query.png" title="允许完全摆脱 Mapper 的 mybatis-plus 体验！封装 stream 和 lambda 操作进行数据返回处理。" src="https://oss.dev33.cn/sa-token/link/stream-query.png" style="">
    	</a>
    	<a href="https://wind.kim/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/sms4j.png" title="短信聚合工具，让发送短信变的更简单。" src="https://oss.dev33.cn/sa-token/link/sms4j.png" style="">
    	</a>
    	<a href="https://cloudeon.top/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/cloudeon.png" title="简化kubernetes上大数据集群的运维管理" src="https://oss.dev33.cn/sa-token/link/cloudeon.png" style="">
    	</a>
    	<a href="https://github.com/dromara/hodor" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/hodor.png" title="Hodor是一个专注于任务编排和高可用性的分布式任务调度系统。" src="https://oss.dev33.cn/sa-token/link/hodor.png" style="">
    	</a>
    	<a href="http://nsrule.com/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/test-hub.png" title="流程编排，插件驱动，测试无限可能" src="https://oss.dev33.cn/sa-token/link/test-hub.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/disjob" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/disjob-2.png" title="Disjob是一个分布式的任务调度框架" src="https://oss.dev33.cn/sa-token/link/disjob-2.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/binlog4j" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/Binlog4j.png" title="轻量级 Mysql Binlog 客户端, 提供宕机续读, 高可用集群等特性" src="https://oss.dev33.cn/sa-token/link/Binlog4j.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/yft-design" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/yft-design.png" title="基于 Canvas 的开源版 创客贴 支持导出json，svg, image文件。" src="https://oss.dev33.cn/sa-token/link/yft-design.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/x-file-storage" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/x-file-storage.svg" title="在 SpringBoot 中通过简单的方式将文件存储到 本地、阿里云 OSS、腾讯云 COS、七牛云 Kodo等" src="https://oss.dev33.cn/sa-token/link/x-file-storage.svg" style="">
    	</a>
    	<a href="https://wemq.nicholasld.cn/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/wemq.png" title="开源、高性能、安全、功能强大的物联网调试和管理解决方案。" src="https://oss.dev33.cn/sa-token/link/wemq.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/mayfly-go" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/mayfly-go.png" title="web 版 linux(终端[终端回放] 文件 脚本 进程 计划任务)、数据库（mysql postgres）、redis(单机 哨兵 集群)、mongo 统一管理操作平台" src="https://oss.dev33.cn/sa-token/link/mayfly-go.png" style="">
    	</a>
    	<a href="https://akali.yomahub.com/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/akali.png" title="Akali(阿卡丽)，轻量级本地化热点检测/降级框架，10秒钟即可接入使用！大流量下的神器" src="https://oss.dev33.cn/sa-token/link/akali.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/dbswitch" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/dbswitch.png" title="异构数据库迁移同步(搬家)工具。" src="https://oss.dev33.cn/sa-token/link/dbswitch.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/easyAi" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/easyAI.png" title="Java 傻瓜式 AI 框架。" src="https://oss.dev33.cn/sa-token/link/easyAI.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/tianai-captcha" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/tianai-captcha.png" title="可能是java界最好的开源行为验证码 captcha、captcha、captcha、captcha、tianai-captcha [滑块验证码、点选验证码、行为验证码、旋转验证码， 滑动验证码]。" src="https://oss.dev33.cn/sa-token/link/tianai-captcha.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/mybatis-plus-ext" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/mybatis-plus-ext.png" title="mybatis-plus 框架的增强拓展包。" src="https://oss.dev33.cn/sa-token/link/mybatis-plus-ext.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/dax-pay" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/dax-pay.png" title="免费开源的支付网关。" src="https://oss.dev33.cn/sa-token/link/dax-pay.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/sayOrder" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/sayorder.png" title="基于easyAi引擎的JAVA高性能，低成本，轻量级智能客服。" src="https://oss.dev33.cn/sa-token/link/sayorder.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/mybatis-jpa-extra" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/mybatis-jpa-extra.png" title="扩展MyBatis JPA支持，简化CUID操作，增强SELECT分页查询" src="https://oss.dev33.cn/sa-token/link/mybatis-jpa-extra.png" style="">
    	</a>
    	<a href="https://newcar.js.org/zh/" target="_blank">
    		<img class="lazy"  data-original="https://oss.dev33.cn/sa-token/link/newcar.png" title="现代化的动画引擎" src="https://oss.dev33.cn/sa-token/link/newcar.png" style="">
    	</a>
    	<a href="http://warm-flow.cn" target="_blank">
    		<img class="lazy"  data-original="https://oss.dev33.cn/sa-token/link/warm-flow.png" title="国产自研工作流，其特点简洁(只有6张表)但又不简单，五脏俱全，组件独立，可扩展，可满足中小项目的组件。" src="https://oss.dev33.cn/sa-token/link/warm-flow.png" style="max-width: 110%">
    	</a>
    	<a href="https://gitee.com/dromara/dy-java" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/dy-java.png" title="DyJava是一款功能强大的抖音Java开发工具包" src="https://oss.dev33.cn/sa-token/link/dy-java.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/MilvusPlus" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/MilvusPlus-logo.png" title="MilvusPlus（简称 MP）是一个 Milvus 的操作工具，旨在简化与 Milvus 向量数据库的交互，为开发者提供类似 MyBatis-Plus 注解和方法调用风格的直观 API,提高效率而生。" src="https://oss.dev33.cn/sa-token/link/MilvusPlus-logo.png" style="">
    	</a>
    	<a href="http://www.easy-query.com/easy-query-doc/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/easy-query.png" title="java下唯一一款同时支持强类型对象关系查询和强类型SQL语法查询的ORM,拥有对象模型筛选、隐式子查询、隐式join、显式子查询、显式join,支持Java/Kotlin" src="https://oss.dev33.cn/sa-token/link/easy-query.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/orion-visor" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/horizontal.png" title="一款高颜值、现代化的智能运维&amp;轻量堡垒机平台。" src="https://oss.dev33.cn/sa-token/link/horizontal.png" style="">
    	</a>
    	<a href="https://www.ujcms.com/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/ujcms.png" title="Java开源网站内容管理系统(java cms)。使用SpringBoot、MyBatis、Vue3、ElementPlus、Vite、TypeScript等技术开发。" src="https://oss.dev33.cn/sa-token/link/ujcms.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/skyeye" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/skyeye-logo.png" title="智能制造一体化，采用Springboot + winUI的低代码平台开发模式。包含30多个应用模块、50多种电子流程" src="https://oss.dev33.cn/sa-token/link/skyeye-logo.png" style="">
    	</a>
    	<a href="https://domain-admin.cn/" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/domain-admin.png" title="SSL证书监测平台，申请证书，自动续签，到期提醒。" src="https://oss.dev33.cn/sa-token/link/domain-admin.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/carbon" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/carbon.png" title="轻量级、语义化、对开发者友好的 golang 时间处理库" src="https://oss.dev33.cn/sa-token/link/carbon.png" style="">
    	</a>
    	<a href="https://gitee.com/dromara/mica-mqtt" target="_blank">
    		<img class="lazy" data-original="https://oss.dev33.cn/sa-token/link/mica-mqtt.png" title="java mqtt 基于 java aio 实现，开源、简单、易用、低延迟、高性能百万级 java mqtt client 组件和 java mqtt broker 服务。" src="https://oss.dev33.cn/sa-token/link/mica-mqtt.png" style="">
    	</a>
    </div>
    <div style="height: 10px; clear: both;"></div>
    <p>
    	为往圣继绝学，一个人或许能走的更快，但一群人会走的更远。
    </p>
</div>

<style>
  .com-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 50px;
    justify-content: flex-start;
  }
  .com-box-f {
      padding: 1em 1em;
      padding-bottom: 30px;
      text-align: center;
  }
  .com-box-you a {
      flex: 0 0 14.5%;
      line-height: 60px;
      height: 60px;
      margin: 10px;
  }
  .table-show-pj a img {
    min-width: 60%;
    max-width: 80%;
    vertical-align: middle;
    max-height: 100%;
    transition: transform 0.2s !important;
  }
  .table-show-pj a {
    border-width: 0 1px 1px 0px;
  }
  .table-show-pj a {
    flex: 0 0 16.5%;
    border: 1px #d5d5d5 solid;
    margin: 0;
    padding: 7px 0;
    overflow: hidden;
  }
  .com-box a {
      display: block;
      flex: 1 0 14.5%;
      margin: 0px;
      cursor: pointer;
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

---
<div style="padding: 1em 1em; padding-bottom: 30px; text-align: center;">
	<br><strong style="font-size: 30px;">👍友情链接</strong><br><br><br>
    <div class="links ">
            <a :href="item.href" target="_blank" v-for="item in projectList" :key="item.href">
              <img :src="item.src" :alt="item.alt" :title="item.title">
            </a>
    </div>
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

      var contentToAppend = `        <p>
          <a href="https://gitee.com/dromara/warm-flow.git" style="margin-left: 12px;"><img src="https://gitee.com/dromara/warm-flow/badge/star.svg?theme=dark"></a>
          <a href='https://gitee.com/dromara/warm-flow/members'><img src='https://gitee.com/dromara/warm-flow/badge/fork.svg?theme=dark' alt='fork'></a>
          <a href='https://github.com/dromara/warm-flow.git'><img src='https://img.shields.io/github/stars/dromara/warm-flow.svg' alt='fork'></a>
          <a href='https://github.com/dromara/warm-flow.git'><img src='https://img.shields.io/github/forks/dromara/warm-flow.svg' alt='fork'></a>
          <a href='https://gitcode.com/dromara/warm-flow'><img src='https://gitcode.com/dromara/warm-flow/star/badge.svg' alt='fork'></a>
          <a href='https://gitee.com/dromara/warm-flow/blob/master/LICENSE'><img src='https://img.shields.io/badge/License-Apache2.0-blue.svg' alt='fork'></a>
        </p>
      `;

      if (pElement) {
        pElement.insertAdjacentHTML('afterend', contentToAppend);
      } else {
        console.error('.vp-hero-actions 元素未找到');
      }

      const element = document.querySelector('.main-description');
      const text = element.textContent;
      let index = 0;
    
      element.textContent = '';
    
      function typeWriter() {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(typeWriter, 100);
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
