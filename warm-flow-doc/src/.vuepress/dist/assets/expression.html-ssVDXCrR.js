import{_ as i,c as s,o as a,b as l}from"./app-NEH0cjHY.js";const n={},t=l(`<h1 id="条件表达式" tabindex="-1"><a class="header-anchor" href="#条件表达式"><span>条件表达式</span></a></h1><h2 id="_1、内置表达式" tabindex="-1"><a class="header-anchor" href="#_1、内置表达式"><span>1、内置表达式</span></a></h2><ul><li>1、大于</li><li>2、大于等于</li><li>3、等于</li><li>4、不等于</li><li>5、小于</li><li>6、小于等于</li><li>7、包含</li><li>8、不包含</li><li>9、SpEL</li><li>10、自定义表达式</li></ul><h2 id="_2、spring-expression-language-spel" tabindex="-1"><a class="header-anchor" href="#_2、spring-expression-language-spel"><span>2、Spring Expression Language（SpEL）</span></a></h2><ul><li>前端配置如<code>#{@user.eval(#flag)}</code>表达式，入库前要拼接前缀，方便区分表达式类型，最终为<code>@@spel@@|#{@user.eval(#flag)}</code></li><li><code>#flag</code>为变量和以下方法入参命名一致，可不设置入参</li></ul><img src="https://foruda.gitee.com/images/1727163098727096928/c29d9af5_2218307.png" width="700"><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Component</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;user&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     * spel条件表达：判断大于等4</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">@param</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> flag</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 待判断的字符串</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">@return</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> eval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> flag</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        BigDecimal</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> BigDecimal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(flag);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        BigDecimal</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> BigDecimal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;4&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">compareTo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(b) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * 新增OA 请假申请</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">@param</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> testLeave</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> OA 请假申请</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">@return</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 结果</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> insertTestLeave</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">TestLeave</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> testLeave</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> flowStatus)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">{</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    FlowParams</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> flowParams </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> FlowParams</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">build</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">flowCode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getFlowType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(testLeave));</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 流程变量</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Map</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Object</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> variable </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HashMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    variable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;flag&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">valueOf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">testLeave</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getDay</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()));</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    flowParams</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">variable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(variable);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Instance</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> instance </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> insService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(id, flowParams);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> instance </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、自定义表达式" tabindex="-1"><a class="header-anchor" href="#_3、自定义表达式"><span>3、自定义表达式</span></a></h2><p><strong>1、扩展需要实现<code>ExpressionStrategy</code>接口或者继承<code>ExpressionStrategyAbstract</code>抽象类</strong><br><strong>2、并且通过这个方法进行注册ExpressionUtil.setExpression</strong></p><table><tr><td><img src="https://foruda.gitee.com/images/1703669588889979582/cbe952be_2218307.png"></td><td><img src="https://foruda.gitee.com/images/1703669685489610156/a8e6be49_2218307.png"></td></tr></table>`,10),e=[t];function h(k,p){return a(),s("div",null,e)}const d=i(n,[["render",h],["__file","expression.html.vue"]]),g=JSON.parse('{"path":"/v1.2.10/guide/expression.html","title":"条件表达式","lang":"zh-CN","frontmatter":{"description":"条件表达式 1、内置表达式 1、大于 2、大于等于 3、等于 4、不等于 5、小于 6、小于等于 7、包含 8、不包含 9、SpEL 10、自定义表达式 2、Spring Expression Language（SpEL） 前端配置如#{@user.eval(#flag)}表达式，入库前要拼接前缀，方便区分表达式类型，最终为@@spel@@|#{@us...","head":[["meta",{"property":"og:url","content":"https://gitee.com/warm_4/warm-flow-doc/v1.2.10/guide/expression.html"}],["meta",{"property":"og:site_name","content":"Dromara Warm-Flow工作流"}],["meta",{"property":"og:title","content":"条件表达式"}],["meta",{"property":"og:description","content":"条件表达式 1、内置表达式 1、大于 2、大于等于 3、等于 4、不等于 5、小于 6、小于等于 7、包含 8、不包含 9、SpEL 10、自定义表达式 2、Spring Expression Language（SpEL） 前端配置如#{@user.eval(#flag)}表达式，入库前要拼接前缀，方便区分表达式类型，最终为@@spel@@|#{@us..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-29T02:59:30.000Z"}],["meta",{"property":"article:author","content":"Dromara Warm-Flow工作流"}],["meta",{"property":"article:modified_time","content":"2024-11-29T02:59:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"条件表达式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-29T02:59:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dromara Warm-Flow工作流\\",\\"url\\":\\"https://gitee.com/warm_4/warm-flow-doc\\"}]}"]]},"headers":[{"level":2,"title":"1、内置表达式","slug":"_1、内置表达式","link":"#_1、内置表达式","children":[]},{"level":2,"title":"2、Spring Expression Language（SpEL）","slug":"_2、spring-expression-language-spel","link":"#_2、spring-expression-language-spel","children":[]},{"level":2,"title":"3、自定义表达式","slug":"_3、自定义表达式","link":"#_3、自定义表达式","children":[]}],"git":{"createdTime":1717989101000,"updatedTime":1732849170000,"contributors":[{"name":"warm","email":"290631660@qq.com","commits":1}]},"readingTime":{"minutes":0.94,"words":281},"filePathRelative":"v1.2.10/guide/expression.md","localizedDate":"2024年6月10日","autoDesc":true,"excerpt":"\\n<h2>1、内置表达式</h2>\\n<ul>\\n<li>1、大于</li>\\n<li>2、大于等于</li>\\n<li>3、等于</li>\\n<li>4、不等于</li>\\n<li>5、小于</li>\\n<li>6、小于等于</li>\\n<li>7、包含</li>\\n<li>8、不包含</li>\\n<li>9、SpEL</li>\\n<li>10、自定义表达式</li>\\n</ul>\\n<h2>2、Spring Expression Language（SpEL）</h2>\\n<ul>\\n<li>前端配置如<code>#{@user.eval(#flag)}</code>表达式，入库前要拼接前缀，方便区分表达式类型，最终为<code>@@spel@@|#{@user.eval(#flag)}</code></li>\\n<li><code>#flag</code>为变量和以下方法入参命名一致，可不设置入参</li>\\n</ul>"}');export{d as comp,g as data};
