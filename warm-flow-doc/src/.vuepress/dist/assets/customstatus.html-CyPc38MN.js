import{_ as s,c as i,o as a,b as n}from"./app-NEH0cjHY.js";const t={},l=n(`<h1 id="自定义流程状态" tabindex="-1"><a class="header-anchor" href="#自定义流程状态"><span>自定义流程状态</span></a></h1><div class="hint-container important"><p class="hint-container-title">重要</p><p>1、flowStatus：流程实例表状态，当前流程状态<br> 2、hisStatus：历史任务表状态，过程状态记录，按照自身业务要求，可以语流程实例状态不同</p></div><h2 id="_1、开启流程" tabindex="-1"><a class="header-anchor" href="#_1、开启流程"><span>1、开启流程</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> insertTestLeave</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">TestLeave</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> testLeave</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> flowStatus)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> IdUtils</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nextIdStr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        testLeave</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(id);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        LoginUser</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> user </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> SecurityUtils</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getLoginUser</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        FlowParams</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> flowParams </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> FlowParams</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">build</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">flowCode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getFlowType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(testLeave))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">handler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getUser</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getUserId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 自定义流程状态扩展，flowStatus与hisStatus可以不同</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Objects</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonNull</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(flowStatus)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            flowParams</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">flowStatus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(flowStatus).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hisStatus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(flowStatus);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Instance</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> instance </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> insService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(id, flowParams);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、流程跳转" tabindex="-1"><a class="header-anchor" href="#_2、流程跳转"><span>2、流程跳转</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 自定义流程状态扩展，flowStatus与hisStatus可以不同</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Objects</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonNull</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(flowStatus)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            flowParams</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">flowStatus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(flowStatus).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hisStatus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(flowStatus);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Instance</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> instance </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> insService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">skipByInsId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">testLeave</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getInstanceId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(), flowParams);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 自定义流程状态扩展，flowStatus与hisStatus可以不同</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Objects</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonNull</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(flowStatus)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            flowParams</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">flowStatus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(flowStatus).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hisStatus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(flowStatus);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Instance</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> instance </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> taskService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">skip</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(taskId, flowParams);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、其他请查阅核心api" tabindex="-1"><a class="header-anchor" href="#_3、其他请查阅核心api"><span>3、其他请查阅核心api</span></a></h2>`,8),h=[l];function e(k,p){return a(),i("div",null,h)}const d=s(t,[["render",e],["__file","customstatus.html.vue"]]),g=JSON.parse('{"path":"/v1.3.3/guide/customstatus.html","title":"自定义流程状态","lang":"zh-CN","frontmatter":{"description":"自定义流程状态 重要 1、flowStatus：流程实例表状态，当前流程状态 2、hisStatus：历史任务表状态，过程状态记录，按照自身业务要求，可以语流程实例状态不同 1、开启流程 2、流程跳转 3、其他请查阅核心api","head":[["meta",{"property":"og:url","content":"https://gitee.com/warm_4/warm-flow-doc/v1.3.3/guide/customstatus.html"}],["meta",{"property":"og:site_name","content":"Dromara Warm-Flow工作流"}],["meta",{"property":"og:title","content":"自定义流程状态"}],["meta",{"property":"og:description","content":"自定义流程状态 重要 1、flowStatus：流程实例表状态，当前流程状态 2、hisStatus：历史任务表状态，过程状态记录，按照自身业务要求，可以语流程实例状态不同 1、开启流程 2、流程跳转 3、其他请查阅核心api"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-29T02:59:30.000Z"}],["meta",{"property":"article:author","content":"Dromara Warm-Flow工作流"}],["meta",{"property":"article:modified_time","content":"2024-11-29T02:59:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义流程状态\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-29T02:59:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dromara Warm-Flow工作流\\",\\"url\\":\\"https://gitee.com/warm_4/warm-flow-doc\\"}]}"]]},"headers":[{"level":2,"title":"1、开启流程","slug":"_1、开启流程","link":"#_1、开启流程","children":[]},{"level":2,"title":"2、流程跳转","slug":"_2、流程跳转","link":"#_2、流程跳转","children":[]},{"level":2,"title":"3、其他请查阅核心api","slug":"_3、其他请查阅核心api","link":"#_3、其他请查阅核心api","children":[]}],"git":{"createdTime":1722928107000,"updatedTime":1732849170000,"contributors":[{"name":"warm","email":"290631660@qq.com","commits":1}]},"readingTime":{"minutes":0.64,"words":191},"filePathRelative":"v1.3.3/guide/customstatus.md","localizedDate":"2024年8月6日","autoDesc":true,"excerpt":"\\n<div class=\\"hint-container important\\">\\n<p class=\\"hint-container-title\\">重要</p>\\n<p>1、flowStatus：流程实例表状态，当前流程状态<br>\\n2、hisStatus：历史任务表状态，过程状态记录，按照自身业务要求，可以语流程实例状态不同</p>\\n</div>\\n<h2>1、开启流程</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> void</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> insertTestLeave</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">TestLeave</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> testLeave</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Integer</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> flowStatus)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">    {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">        String</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> id </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> IdUtils</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">nextIdStr</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">        testLeave</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">setId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(id);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">        LoginUser</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> user </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> SecurityUtils</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">getLoginUser</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">        FlowParams</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> flowParams </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> FlowParams</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">build</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">().</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">flowCode</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">getFlowType</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(testLeave))</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">                .</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">handler</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">user</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">getUser</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">().</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">getUserId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">().</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">toString</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">());</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">        </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">        // 自定义流程状态扩展，flowStatus与hisStatus可以不同</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        if</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> (</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">Objects</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">nonNull</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(flowStatus)</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">            flowParams</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">flowStatus</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(flowStatus).</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">hisStatus</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(flowStatus);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">        }</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">        Instance</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> instance </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> insService</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">start</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(id, flowParams);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">    }</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{d as comp,g as data};
