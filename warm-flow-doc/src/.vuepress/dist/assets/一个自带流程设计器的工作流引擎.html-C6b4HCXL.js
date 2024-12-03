import{_ as i,c as s,o as a,b as n}from"./app-NEH0cjHY.js";const l={},t=n(`<h1 id="一个自带流程设计器的工作流引擎" tabindex="-1"><a class="header-anchor" href="#一个自带流程设计器的工作流引擎"><span>一个自带流程设计器的工作流引擎</span></a></h1><br><p><strong>终于迎来了这个激动人心的版本1.3.0，不需要在为引入设计器而烦恼了，按照以下前四点，可以快速接入业务系统，下面介绍如何使用设计器</strong></p><br><h2 id="_1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_1-引入依赖"><span>1. 引入依赖</span></a></h2><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;io.github.minliuhua&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;warm-flow-plugin-ui-sb-web&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;1.3.0&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-后端放行部分路径" tabindex="-1"><a class="header-anchor" href="#_2-后端放行部分路径"><span>2. 后端放行部分路径</span></a></h2><div class="hint-container important"><p class="hint-container-title">重要</p><p>1、这两个路径需要放行，否则无法访问，<code>/warm-flow-ui/**</code>, <code>/warm-flow/**</code><br> 2、以下是spring-security放行配置示例</p></div><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Bean</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">protected</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SecurityFilterChain</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> filterChain</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">HttpSecurity</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> httpSecurity) throws </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Exception</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> httpSecurity</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            .......</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // 注解标记允许匿名访问的url</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">authorizeHttpRequests</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((requests) </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                // 后端请求，静态资源，可匿名访问</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                requests</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">antMatchers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/warm-flow-ui/**&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/warm-flow/**&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">permitAll</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                        // 除上面外的所有请求全部需要鉴权认证</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">anyRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">authenticated</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            ......</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">build</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-前端加载设计器" tabindex="-1"><a class="header-anchor" href="#_3-前端加载设计器"><span>3. 前端加载设计器</span></a></h2><div class="hint-container important"><p class="hint-container-title">重要</p><p>1、设计器页面入口地址为：<code>/warm-flow-ui/\${definitionId}?disabled=\${disabled}</code><br> 2、总体思路就是把前端接口(比如80)代理成后端接口(8080)，去访问该地址，其他不变<br> 3、或者直接通过后端接口访问该地址，可能需要处理跨域问题<br> 4、以下是nginx代理示例：</p></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /warm-flow-ui/ {</span></span>
<span class="line"><span>        proxy_pass http://localhost:8080/warm-flow-ui/;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-设计器办理人权限数据接入" tabindex="-1"><a class="header-anchor" href="#_4-设计器办理人权限数据接入"><span>4. 设计器办理人权限数据接入</span></a></h2><div class="hint-container important"><p class="hint-container-title">重要</p><p>给任务节点设置哪些权限的人可以办理，实现接口提供给设计器</p></div><h3 id="_4-1-办理人权限选择弹框页面" tabindex="-1"><a class="header-anchor" href="#_4-1-办理人权限选择弹框页面"><span>4.1 办理人权限选择弹框页面</span></a></h3><img src="https://foruda.gitee.com/images/1729094468685997422/d38c7e79_2218307.png"><br><h3 id="_4-2-实现接口获取以上页面办理人权限数据" tabindex="-1"><a class="header-anchor" href="#_4-2-实现接口获取以上页面办理人权限数据"><span>4.2 实现接口获取以上页面办理人权限数据</span></a></h3><h4 id="_4-2-1-handlerselectservice接口" tabindex="-1"><a class="header-anchor" href="#_4-2-1-handlerselectservice接口"><span>4.2.1 HandlerSelectService接口</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * 流程设计器-获取办理人权限设置列表接口</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">@author</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> warm</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HandlerSelectService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     * 获取办理人权限设置列表tabs页签, 如：用户、角色和部门等</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">@return</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> tabs页签</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getHandlerType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     * 获取办理人权限设置列表结果，如：用户列表、角色列表、部门列表等</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">@param</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> query</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 查询参数</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">@return</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 结果</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">HandlerSelectVo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getHandlerSelect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">HandlerQuery</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> query</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、项目介绍" tabindex="-1"><a class="header-anchor" href="#_5、项目介绍"><span>5、项目介绍</span></a></h2><div class="hint-container important"><p class="hint-container-title">重要</p><p>Warm-Flow国产工作流引擎🎉，其特点简洁轻量，五脏俱全，可扩展，是一个可通过jar引入设计器的工作流。</p></div><ol><li>简洁易用：只有7张表，代码量少，可快速上手和集成</li><li>审批功能：支持通过、退回、任意跳转、转办、终止、会签、票签、委派和加减签、互斥和并行网关</li><li>监听器与流程变量：支持四种监听器，可应对不同场景，灵活可扩展，参数传递，动态权限</li><li>流程图：流程引擎自带流程图，可在不集成流程设计器情况下使用</li><li>流程设计器：可通过jar包形式快速集成到项目，减少繁琐代码搬运和适配</li><li>条件表达式：内置常见的和spel条件表达式，并且支持自定义扩展</li><li>办理人变量表达式：内置\${handler}和spel格式的表达式，可满足不同场景，灵活可扩展</li><li>orm框架扩展：目前支持MyBatis、Mybatis-Plus、Mybatis-Flex和Jpa，后续会由社区提供其他支持，扩展方便</li><li>数据库支持：目前支持MySQL 、Oracle 和PostgreSQL，后续会继续支持其他数据库或者国产数据库</li><li>多租户与软删除：流程引擎自身维护多租户和软删除实现，也可使用对应orm框架的实现方式</li><li>同时支持spring和solon</li><li>兼容java8和java17,理论11也可以</li><li>官方提供基于ruoyi-vue封装实战项目，很实用</li></ol><h2 id="_6、演示地址" tabindex="-1"><a class="header-anchor" href="#_6、演示地址"><span>6、演示地址</span></a></h2><ul><li>admin/admin123</li></ul><p>演示地址：<a href="http://www.hhzai.top" target="_blank" rel="noopener noreferrer">http://www.hhzai.top</a></p><h2 id="_7、官网" tabindex="-1"><a class="header-anchor" href="#_7、官网"><span>7、官网</span></a></h2><p><a href="http://www.warm-flow.cn/" target="_blank" rel="noopener noreferrer">http://warm-flow.cn</a></p>`,28),e=[t];function h(p,k){return a(),s("div",null,e)}const d=i(l,[["render",h],["__file","一个自带流程设计器的工作流引擎.html.vue"]]),c=JSON.parse('{"path":"/v1.3.0/guide/update/%E4%B8%80%E4%B8%AA%E8%87%AA%E5%B8%A6%E6%B5%81%E7%A8%8B%E8%AE%BE%E8%AE%A1%E5%99%A8%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E5%BC%95%E6%93%8E.html","title":"一个自带流程设计器的工作流引擎","lang":"zh-CN","frontmatter":{"description":"一个自带流程设计器的工作流引擎 终于迎来了这个激动人心的版本1.3.0，不需要在为引入设计器而烦恼了，按照以下前四点，可以快速接入业务系统，下面介绍如何使用设计器 1. 引入依赖 2. 后端放行部分路径 重要 1、这两个路径需要放行，否则无法访问，/warm-flow-ui/**, /warm-flow/** 2、以下是spring-security放...","head":[["meta",{"property":"og:url","content":"https://gitee.com/warm_4/warm-flow-doc/v1.3.0/guide/update/%E4%B8%80%E4%B8%AA%E8%87%AA%E5%B8%A6%E6%B5%81%E7%A8%8B%E8%AE%BE%E8%AE%A1%E5%99%A8%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81%E5%BC%95%E6%93%8E.html"}],["meta",{"property":"og:site_name","content":"Dromara Warm-Flow工作流"}],["meta",{"property":"og:title","content":"一个自带流程设计器的工作流引擎"}],["meta",{"property":"og:description","content":"一个自带流程设计器的工作流引擎 终于迎来了这个激动人心的版本1.3.0，不需要在为引入设计器而烦恼了，按照以下前四点，可以快速接入业务系统，下面介绍如何使用设计器 1. 引入依赖 2. 后端放行部分路径 重要 1、这两个路径需要放行，否则无法访问，/warm-flow-ui/**, /warm-flow/** 2、以下是spring-security放..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-29T02:59:30.000Z"}],["meta",{"property":"article:author","content":"Dromara Warm-Flow工作流"}],["meta",{"property":"article:modified_time","content":"2024-11-29T02:59:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一个自带流程设计器的工作流引擎\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-29T02:59:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dromara Warm-Flow工作流\\",\\"url\\":\\"https://gitee.com/warm_4/warm-flow-doc\\"}]}"]]},"headers":[{"level":2,"title":"1. 引入依赖","slug":"_1-引入依赖","link":"#_1-引入依赖","children":[]},{"level":2,"title":"2. 后端放行部分路径","slug":"_2-后端放行部分路径","link":"#_2-后端放行部分路径","children":[]},{"level":2,"title":"3. 前端加载设计器","slug":"_3-前端加载设计器","link":"#_3-前端加载设计器","children":[]},{"level":2,"title":"4. 设计器办理人权限数据接入","slug":"_4-设计器办理人权限数据接入","link":"#_4-设计器办理人权限数据接入","children":[{"level":3,"title":"4.1 办理人权限选择弹框页面","slug":"_4-1-办理人权限选择弹框页面","link":"#_4-1-办理人权限选择弹框页面","children":[]},{"level":3,"title":"4.2 实现接口获取以上页面办理人权限数据","slug":"_4-2-实现接口获取以上页面办理人权限数据","link":"#_4-2-实现接口获取以上页面办理人权限数据","children":[]}]},{"level":2,"title":"5、项目介绍","slug":"_5、项目介绍","link":"#_5、项目介绍","children":[]},{"level":2,"title":"6、演示地址","slug":"_6、演示地址","link":"#_6、演示地址","children":[]},{"level":2,"title":"7、官网","slug":"_7、官网","link":"#_7、官网","children":[]}],"git":{"createdTime":1729355959000,"updatedTime":1732849170000,"contributors":[{"name":"warm","email":"290631660@qq.com","commits":1}]},"readingTime":{"minutes":3.07,"words":920},"filePathRelative":"v1.3.0/guide/update/一个自带流程设计器的工作流引擎.md","localizedDate":"2024年10月20日","autoDesc":true,"excerpt":"\\n<br>\\n<p><strong>终于迎来了这个激动人心的版本1.3.0，不需要在为引入设计器而烦恼了，按照以下前四点，可以快速接入业务系统，下面介绍如何使用设计器</strong></p>\\n<br>\\n<h2>1. 引入依赖</h2>\\n<div class=\\"language-xml line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"xml\\" data-title=\\"xml\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">dependency</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">groupId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;io.github.minliuhua&lt;/</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">groupId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">artifactId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;warm-flow-plugin-ui-sb-web&lt;/</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">artifactId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">version</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;1.3.0&lt;/</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">version</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">dependency</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{d as comp,c as data};
