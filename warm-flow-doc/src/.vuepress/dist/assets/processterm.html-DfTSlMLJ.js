import{_ as t,c as d,o as n,b as e}from"./app-NEH0cjHY.js";const r={},l=e(`<h1 id="术语规则" tabindex="-1"><a class="header-anchor" href="#术语规则"><span>术语规则</span></a></h1><table><thead><tr><th>序 号</th><th>术语</th><th>术语解释</th></tr></thead><tbody><tr><td>1</td><td>审批</td><td>当前节点处理人，对当前流程节点进行审核操作，完成后进入下一节点</td></tr><tr><td>2</td><td>回退</td><td>当前节点处理人，将流程驳回至之前已经处理过的任务节点，要求重新处理</td></tr><tr><td>2</td><td>任意跳转</td><td>任意跳转(通过或者退回)指定节点</td></tr><tr><td>3</td><td>委派</td><td>当前节点处理人，将自己的主办或者经办权限转移委派至别的用户代为处理，处理完后回到当前处理人手中，并由当前处理人处理完后进入下一节点</td></tr><tr><td>4</td><td>转办</td><td>当前节点处理人，将操作权限转给别人处理，处理完后进入下一节点（自己不再处理）</td></tr><tr><td>5</td><td>催办</td><td>对于时效要求高的流程，发起人可催办提醒当前节点处理人，一般以消息通知方式提醒处理人</td></tr><tr><td>7</td><td>取回</td><td>将工作流中的某个任务退回给之前的执行者，以便进行修改或重新处理</td></tr><tr><td>8</td><td>终止</td><td>当前节点处理人，终止当前流程</td></tr><tr><td>9</td><td>抄送</td><td>当前节点处理人，处理完成之后将处理结果抄送给其他人</td></tr><tr><td>10</td><td>加签</td><td>当前节点处理人，需要增加他人参与审批</td></tr><tr><td>11</td><td>减签</td><td>当前节点处理人，需要减少他人参与审批</td></tr><tr><td>12</td><td>会签</td><td>会签就是指在流程管理中发起人可以同时对多个人发起会签，多个人可以同时处理，只有所有负责人审批通过，审批节点才会通过。</td></tr><tr><td>13</td><td>或签</td><td>一名负责人通过即可通过审批节点</td></tr><tr><td>14</td><td>暂存</td><td>复杂表单，一次性填写不完，需要保存草稿功能，开始节点的暂存</td></tr></tbody></table><h1 id="流程规则" tabindex="-1"><a class="header-anchor" href="#流程规则"><span>流程规则</span></a></h1><h2 id="_1、术语" tabindex="-1"><a class="header-anchor" href="#_1、术语"><span>1、术语</span></a></h2><ol><li>跳转类型：PASS-审批通过，REJECT-驳回。</li><li>跳转条件：根据跳转条件，判断要执行哪个分支，比如“请假天数小于4”。</li><li>节点类型：0-开始节点，1-中间节点，2-结束节点。</li><li>权限标识：权限类型:权限标识，可以多个，如“role:3” ， “1,role:3,role:1”或者“1,role:3,dept:1”。</li><li>所属并行网关节点编码：离上次最近的并行网关节点编码，可传递，遇新网关重置。</li><li>协作类型：</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>APPROVAL-无：无其他协作方式</span></span>
<span class="line"><span>TRANSFER-转办：任务转给其他人办理</span></span>
<span class="line"><span>DEPUTE-委派：求助其他人审批，然后参照他的意见决定是否审批通过</span></span>
<span class="line"><span>COUNTERSIGN-会签：和其他人一起审批通过，才算通过</span></span>
<span class="line"><span>VOTE-票签：和部分人一起审批，达到一定通过率，才算通过</span></span>
<span class="line"><span>ADD_SIGNATURE-加签：办理中途，希望其他人一起参与办理</span></span>
<span class="line"><span>REDUCTION_SIGNATURE-减签：办理中途，希望某些人不参与办理</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、通用规则" tabindex="-1"><a class="header-anchor" href="#_2、通用规则"><span>2、通用规则</span></a></h2><ol><li>开始节点和结束节点必须有。</li><li>开始节点必须有且只有一个跳转条件（跳转节点），中间和网关节点必须有跳转条件，结束节点不需要。</li><li>网关节点可不需要跳转类型，互斥网关按照跳转条件流转。</li><li>开启流程是传入租户id，就可以后续就可以根据租户id过来任务。</li><li>角色权限控制，非必填，流程定义时通过逗号隔开多个权限，流转是传入“1,role:3” ， “1,role:3,role:1”或者“1,role:3,dept:1”，进行控制。</li><li>当流程有多个结束节点，有一个完成，流程实例就算完成</li><li>网关节点不可直连。</li><li>一票否决（谨慎使用），如果驳回，驳回指向节点后还存在其他正在执行的待办任务，转历史任务，状态都为失效,重走流程。</li><li>中间节点不可通过或者驳回到多个中间节点，必须先流转到网关节点</li><li>流程变量是全局都能获取，任务变量就当前任务触发的监听器时可以获取。</li></ol><h2 id="_3、流程状态" tabindex="-1"><a class="header-anchor" href="#_3、流程状态"><span>3、流程状态</span></a></h2><ol><li>待提交：开启流程后的状态</li><li>审批中：提交审批后的状态</li><li>驳回：就是点击驳回后的状态</li><li>失效：是针对并行流程，流程完成后，还存在待办任务，把它转历史记录，历史记录状态无效</li><li>审批通过：是任务完成后，待办任务转为历史记录，历史记录状态为审批通过</li><li>已完成：流程结束的状态</li></ol><h2 id="_4、串行网关规则" tabindex="-1"><a class="header-anchor" href="#_4、串行网关规则"><span>4、串行网关规则</span></a></h2><ol><li>以串行网关开头，只会执行后面的一条任务路线，以串行网关结尾，只需前面的一条路线完成即可往下执行（最主要限制）。</li><li>串行网关需要根据传入跳转条件去判断执行哪个任务路线。</li></ol><h2 id="_5、并行网关规则" tabindex="-1"><a class="header-anchor" href="#_5、并行网关规则"><span>5、并行网关规则</span></a></h2><ol><li>以并行网关开头，只会必须执行后面的所有任务路线，以并行网关结尾，前面的任务路线必须都完成即可往下执行（最主要限制）。</li><li>当流程完成，并行网关范围内还存在待办任务未完成，转历史任务，状态完成。</li></ol><h2 id="_6、流程协作规则" tabindex="-1"><a class="header-anchor" href="#_6、流程协作规则"><span>6、流程协作规则</span></a></h2><ol><li>或签：待办任务有一个&quot;<strong>审批</strong>&quot;/&quot;<strong>回退</strong>&quot;操作即完成当前任务，或签待办权限支持个人、部门、角色及用户自定义类型</li><li>会签：待办任务所有待办人都进行&quot;<strong>审批</strong>&quot;当前任务执行&quot;<strong>审批</strong>&quot;通过逻辑，会签中任意一待办人进行&quot;<strong>回退</strong>&quot;则整个任务执行&quot;<strong>回退</strong>&quot;逻辑，会签所有待办权限只支持个人类型</li><li>票签：此时根据&quot;<strong>审批</strong>&quot;<strong>/</strong>&quot;<strong>回退</strong>&quot;操作自动计算&quot;<strong>审批通过率(已审批人数/任务总人数)</strong>&quot;与&quot;<strong>回退驳回率(已回退人数/任务总人数)</strong>&quot;，&quot;<strong>审批通过率</strong>&quot;<strong>大于等于</strong>流程设计时指定的&quot;<strong>票签通过率</strong>&quot;执行&quot;<strong>审批</strong>&quot;通过逻辑，&quot;<strong>回退驳回率</strong>&quot;大于&quot;<strong>1-票签通过率</strong>&quot;执行&quot;<strong>回退</strong>&quot;逻辑，票签所有待办权限只支持个人</li></ol>`,16),i=[l];function a(o,s){return n(),d("div",null,i)}const h=t(r,[["render",a],["__file","processterm.html.vue"]]),p=JSON.parse('{"path":"/v1.3.4/guide/processterm.html","title":"术语规则","lang":"zh-CN","frontmatter":{"description":"术语规则 流程规则 1、术语 跳转类型：PASS-审批通过，REJECT-驳回。 跳转条件：根据跳转条件，判断要执行哪个分支，比如“请假天数小于4”。 节点类型：0-开始节点，1-中间节点，2-结束节点。 权限标识：权限类型:权限标识，可以多个，如“role:3” ， “1,role:3,role:1”或者“1,role:3,dept:1”。 所属并行...","head":[["meta",{"property":"og:url","content":"https://gitee.com/warm_4/warm-flow-doc/v1.3.4/guide/processterm.html"}],["meta",{"property":"og:site_name","content":"Dromara Warm-Flow工作流"}],["meta",{"property":"og:title","content":"术语规则"}],["meta",{"property":"og:description","content":"术语规则 流程规则 1、术语 跳转类型：PASS-审批通过，REJECT-驳回。 跳转条件：根据跳转条件，判断要执行哪个分支，比如“请假天数小于4”。 节点类型：0-开始节点，1-中间节点，2-结束节点。 权限标识：权限类型:权限标识，可以多个，如“role:3” ， “1,role:3,role:1”或者“1,role:3,dept:1”。 所属并行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-29T02:59:30.000Z"}],["meta",{"property":"article:author","content":"Dromara Warm-Flow工作流"}],["meta",{"property":"article:modified_time","content":"2024-11-29T02:59:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"术语规则\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-29T02:59:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dromara Warm-Flow工作流\\",\\"url\\":\\"https://gitee.com/warm_4/warm-flow-doc\\"}]}"]]},"headers":[{"level":2,"title":"1、术语","slug":"_1、术语","link":"#_1、术语","children":[]},{"level":2,"title":"2、通用规则","slug":"_2、通用规则","link":"#_2、通用规则","children":[]},{"level":2,"title":"3、流程状态","slug":"_3、流程状态","link":"#_3、流程状态","children":[]},{"level":2,"title":"4、串行网关规则","slug":"_4、串行网关规则","link":"#_4、串行网关规则","children":[]},{"level":2,"title":"5、并行网关规则","slug":"_5、并行网关规则","link":"#_5、并行网关规则","children":[]},{"level":2,"title":"6、流程协作规则","slug":"_6、流程协作规则","link":"#_6、流程协作规则","children":[]}],"git":{"createdTime":1717989101000,"updatedTime":1732849170000,"contributors":[{"name":"warm","email":"290631660@qq.com","commits":1}]},"readingTime":{"minutes":5.2,"words":1559},"filePathRelative":"v1.3.4/guide/processterm.md","localizedDate":"2024年6月10日","autoDesc":true,"excerpt":"\\n<table>\\n<thead>\\n<tr>\\n<th>序  号</th>\\n<th>术语</th>\\n<th>术语解释</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>1</td>\\n<td>审批</td>\\n<td>当前节点处理人，对当前流程节点进行审核操作，完成后进入下一节点</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>回退</td>\\n<td>当前节点处理人，将流程驳回至之前已经处理过的任务节点，要求重新处理</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>任意跳转</td>\\n<td>任意跳转(通过或者退回)指定节点</td>\\n</tr>\\n<tr>\\n<td>3</td>\\n<td>委派</td>\\n<td>当前节点处理人，将自己的主办或者经办权限转移委派至别的用户代为处理，处理完后回到当前处理人手中，并由当前处理人处理完后进入下一节点</td>\\n</tr>\\n<tr>\\n<td>4</td>\\n<td>转办</td>\\n<td>当前节点处理人，将操作权限转给别人处理，处理完后进入下一节点（自己不再处理）</td>\\n</tr>\\n<tr>\\n<td>5</td>\\n<td>催办</td>\\n<td>对于时效要求高的流程，发起人可催办提醒当前节点处理人，一般以消息通知方式提醒处理人</td>\\n</tr>\\n<tr>\\n<td>7</td>\\n<td>取回</td>\\n<td>将工作流中的某个任务退回给之前的执行者，以便进行修改或重新处理</td>\\n</tr>\\n<tr>\\n<td>8</td>\\n<td>终止</td>\\n<td>当前节点处理人，终止当前流程</td>\\n</tr>\\n<tr>\\n<td>9</td>\\n<td>抄送</td>\\n<td>当前节点处理人，处理完成之后将处理结果抄送给其他人</td>\\n</tr>\\n<tr>\\n<td>10</td>\\n<td>加签</td>\\n<td>当前节点处理人，需要增加他人参与审批</td>\\n</tr>\\n<tr>\\n<td>11</td>\\n<td>减签</td>\\n<td>当前节点处理人，需要减少他人参与审批</td>\\n</tr>\\n<tr>\\n<td>12</td>\\n<td>会签</td>\\n<td>会签就是指在流程管理中发起人可以同时对多个人发起会签，多个人可以同时处理，只有所有负责人审批通过，审批节点才会通过。</td>\\n</tr>\\n<tr>\\n<td>13</td>\\n<td>或签</td>\\n<td>一名负责人通过即可通过审批节点</td>\\n</tr>\\n<tr>\\n<td>14</td>\\n<td>暂存</td>\\n<td>复杂表单，一次性填写不完，需要保存草稿功能，开始节点的暂存</td>\\n</tr>\\n</tbody>\\n</table>"}');export{h as comp,p as data};
