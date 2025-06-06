# 流程图管理
<!-- @include: ../other/betweengg.md -->

::: tip
**前提条件：仔细阅读[设计器集成](./designerIntroduced.html#流程图介绍)**
:::

## 1. 查看流程图
::: tip
**1、流程图页面入口是访问后端地址(前后端不分离)：`ip:port/warm-flow-ui/index.html?id=${insId}&type=FlowChart&Authorization=token`**
- insId：流程实例id
- type：查看流程图类型，固定写法
- token：用户token，[共享后端权限(如token)](./designerIntroduced.html#_6-共享后端权限-如token)
:::

::: code-tabs#shell

@tab:active vue2

```vue

<template>
  <div :style="'height:' + height">
    <iframe :src="url"  style="width: 100%; height: 100%"/>
  </div>
</template>
<script>
  import {getToken} from "@/utils/auth";

  export default {
    name: "WarmChart",
    props: {
      // 组件调用时传入的流程实例ID
      insId: { type: [String, Number], default: null }
    },
    data() {
      return {
        height: document.documentElement.clientHeight - 200 + "px;",
        url: "",
      };
    },

    watch: {
      insId: {
        immediate: true, // 立即执行 handler 方法
        handler(newVal) {
          // 更新 url，添加时间戳防止缓存
          this.url = `${process.env.VUE_APP_FLOW_API}/warm-flow-ui/index.html?id=${newVal}&type=FlowChart&Authorization=Bearer ${getToken()}`;
        }
      }
    },

  };
</script>
```

@tab vue3

```vue
待完善

```

@tab 前后端不分离

```java
可以直接访问后端接口加载页面，如：`ip:port/warm-flow-ui/index.html?id=${insId}&type=FlowChart&Authorization=token`

@Controller
@RequestMapping("/warm-flow")
public class WarmFlowController
{
    @GetMapping()
    public String index(String insId)
    {
        return redirect("/warm-flow-ui/index.html?id=" + insId + "&type=" + FlowChart);
    }
}

或者前端直接访问后端接口，如：`/warm-flow-ui/index.html?id=1839683148936663047&type=FlowChart`
/*打开新的页签，加载设计器*/
function detail(dictId) {
  var url = prefix + '/detail/' + dictId;
  $.modal.openTab("字典数据", "/warm-flow-ui/index.html?id=1839683148936663047&type=FlowChart");
}

```

@tab React

```shell
待完善
```

:::

## 2. 自定义流程图节点颜色

**配置文件**
```yaml
# warm-flow工作流配置
warm-flow:
  ...
  ##流程状态对应的三元色
  chart-status-color:
    ## 未办理
    - 157,255,0
    ## 待办理
    - 0,0,0
    ## 已办理
    - 255,205,23
```

**效果图**
<div><img src="https://foruda.gitee.com/images/1749192268410702889/080ed0c7_2218307.png" width="800"></div>


## 3. 流程图渲染规则
- 目标节点，待办
- 开启流程:
    - 初始化流程定义json
    - 其他的：未办
- 通过:
    - 途径节点和跳转线：已办，
- 退回:
    - 途径节点和跳转线：未办，
    - 目标节点之后的所有结点和跳转线：未办
- 目标节点是结束节点:
    - 目标节点和起始节点：已办
    - 所有待办：未办
- 如果办理途径存在并行网关，则需要判断是否需要生成新任务
    - 获取目标节点途径最近的并行网关集合
    - 根据目标节点递归往上找最近的并行网关，或者直到不是网关为止
    - 查询每个并行网关的所有的前置路线，记录总数量和已办理数量，如果已办数量=总数量-1，说明可以生成新任务
    - 如果前置节点是非并行网关，总数量+1，已办数量按实际情况记录
    - 如果前置节点是并行网关，递归往上找，直至找到非并行网关，记录总数量和已办数量。
