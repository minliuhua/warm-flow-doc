# 或、票、会签
<!-- @include: ../other/betweengg.md -->

::: tip 
- 审批过程中可能存在，一人或者多人审批的情况，不同情况对应不同协作类型（会签、票签和或签）

:::

## 1、流程协作规则
> 或签：一名办理人审批通过，审批节点才会通过  
> 票签：满足设定的通过率，部分审批人审批通过，审批节点才会通过  
> 会签：所有审批人审批通过，审批节点才会通过


## 2、使用演示
### 2.1、或签
<div><img src="https://foruda.gitee.com/images/1733192550833087867/e28c8a1c_2218307.png"/></div>

### 2.2、票签
<div><img src="https://foruda.gitee.com/images/1733192752351796936/ab226443_2218307.png"/></div>

### 2.3、会签
<div><img src="https://foruda.gitee.com/images/1733192611266477094/d5d920aa_2218307.png"/></div>


## 3、入库值
- 他们都是保存在flow_node表的node_ratio字段中  
- 0就是或签，0-100就是票签，100就是会签
