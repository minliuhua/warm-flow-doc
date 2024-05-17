## 介绍

🎉国产自研工作流，其特点简洁(只有6张表)但又不简单，五脏俱全，组件独立，可扩展，可满足中小项目的组件。

1. 支持常规的流程流转，比如跳转、回退、审批和任意跳转
2. 支持转办、终止，任务最终回到发起人
3. 支持或签（会签和票签开发中）
4. 业务项目可不依赖流程设计器，组件会生成流程图片
5. 支持角色、部门和用户等权限配置
6. 支持监听器，参数传递，动态权限 
7. 支持多租户
8. 支持互斥网关，并行网关
9. 支持条件表达式，可扩展
10. 支持不同orm框架系统使用，支持不同orm框架和数据库扩展
11. 同时支持spring和solon
12. 兼容java8和java17,理论11也可以
13. 官方提供基于ruoyi-vue封装实战项目，很实用


>  **希望一键三连，你的⭐️ Star ⭐️是我持续开发的动力，项目也活的更长**  
>   **可二开、商用，但请注明出处，保留代码注释中的作者名，[但是使用前请先登记](https://gitee.com/warm_4/warm-flow/issues/I7Y57D)**  **  
>
>   **[gitee地址](https://gitee.com/dromara/warm-flow.git  )** |**[github地址](https://github.com/dromara/warm-flow.git)**


## 演示地址

- admin/admin123

演示地址：http://www.hhzai.top


## 学习视频
这是群友个人录制的视频，把研究心得以以视频的形式发在b站了，主要是读源码都是业余时间录制的！
https://www.bilibili.com/video/BV1Ci42117pK/


## 集成项目示例 

| 版本           | 项目名称        | 源码地址              |
|--------------|--------------|------ |
| springboot2+vue2  |RuoYi-Vue-Warm-Flow| https://gitee.com/min290/hh-vue        | 
| springboot3+React |quick-boot     | https://github.com/csx-bill/quick-boot |
| vue3        |ruoyi-vue3      | https://gitee.com/min290/RuoYi-Vue3.git |


## 联系方式

<table>
    <tr>
        <td><img src="https://foruda.gitee.com/images/1714012802753863162/57b4e3a8_2218307.png"/></td>
        <td><img src="https://foruda.gitee.com/images/1714027440230712264/bb5259a5_2218307.png"/></td>
    </tr>
</table>


## 快速开始

在开始之前，我们假定您已经：

* 熟悉 Java 环境配置及其开发
* 熟悉 关系型 数据库，比如 MySQL
* 熟悉 Spring Boot或者Solon 及相关框架
* 熟悉 Java 构建工具，比如 Maven

### 导入sql，按需求执行
>   **如果第一次导入，请先创建数据库，找到组件中的sql目录，找到对应数据库的全量脚本warm-flow-all.sql，执行**  
>   **如果版本更新，找到对应数据库的更新版本，比如xx-upgrade，warm-flow_x.x.x.sql，执行** 






### maven依赖
#### 1、mybatis
**springboot项目**

```maven
<dependency>
      <groupId>io.github.minliuhua</groupId>
      <artifactId>warm-flow-mybatis-sb-starter</artifactId>
      <version>最新版本</version>
</dependency>
```

**solon项目**

```maven
<dependency>
      <groupId>io.github.minliuhua</groupId>
      <artifactId>warm-flow-mybatis-solon-plugin</artifactId>
      <version>最新版本</version>
</dependency>
```

#### 2、mybatis-plus
**springboot项目**

```maven
<dependency>
      <groupId>io.github.minliuhua</groupId>
      <artifactId>warm-flow-mybatis-plus-sb-starter</artifactId>
      <version>最新版本</version>
</dependency>
```

**solon项目**

```maven
<dependency>
      <groupId>io.github.minliuhua</groupId>
      <artifactId>warm-flow-mybatis-plus-solon-plugin</artifactId>
      <version>最新版本</version>
</dependency>
```

‍

### 支持数据库类型
**已经新增mybatis-plus扩展依赖，理论上转换表结构，即可。组件中不存在sql脚本了，全是mybaits-plus语法**

* [x] mysql
* [ ] oracle
* [ ] sqlserver
* [ ] ......


### 支持orm框架类型

* [x] mybatis及其增强组件
* [ ] jpa
* [ ] easy-query
* [ ] wood
* [ ] sqltoy
* [ ] beetlsql
* [ ] ......




> **有想扩展其他orm框架和数据库的可加qq群联系群主**

### 代码示例

https://gitee.com/min290/hh-vue/blob/master/ruoyi-admin/src/test/java/com/ruoyi/system/service/impl/FlowTest.java



#### 部署流程

```java
public void deployFlow() throws Exception {
        String path = "/Users/minliuhua/Desktop/mdata/file/IdeaProjects/min/hh-vue/hh-admin/src/main/resources/leaveFlow-serial.xml";
        System.out.println("已部署流程的id：" + defService.importXml(new FileInputStream(path)).getId());
    }
```

#### 发布流程

```java
public void publish() throws Exception {
        defService.publish(1212437969554771968L);
    }
```

#### 开启流程

```java
public void startFlow() {
        System.out.println("已开启的流程实例id：" + insService.start("1", getUser()).getId());
    }
```

#### 流程流转

```java
public void skipFlow() throws Exception {
        // 通过实例id流转
        Instance instance = insService.skipByInsId(1219286332141080576L, getUser().skipType(SkipType.PASS.getKey())
                .permissionFlag(Arrays.asList("role:1", "role:2")));
        System.out.println("流转后流程实例：" + instance.toString());

//        // 通过任务id流转
//        Instance instance = insService.skip(1219286332145274880L, getUser().skipType(SkipType.PASS.getKey())
//                .permissionFlag(Arrays.asList("role:1", "role:2")));
//        System.out.println("流转后流程实例：" + instance.toString());
    }

 public void skipAnyNode() throws Exception {
        // 跳转到指定节点
        Instance instance = insService.skip(1219286332145274880L, getUser().skipType(SkipType.PASS.getKey())
                .permissionFlag(Arrays.asList("role:1", "role:2")).nodeCode("4"));
        System.out.println("流转后流程实例：" + instance.toString());
    }
```

#### 监听器
具体可以阅读以下两篇文章：
[监听器生命周期](https://blog.csdn.net/weixin_43284369/article/details/137402216)
[权限监听器动态设置](https://blog.csdn.net/weixin_43284369/article/details/137225966)

实现Listener接口，然后在设计器中配置好监听器
```java
public class PermissionListener implements Listener {

    private static final Logger log = LoggerFactory.getLogger(PermissionListener.class);

    @Override
    public void notify(ListenerVariable variable) {
        log.info("权限监听器开始;{}", variable);
        Instance instance = variable.getInstance();
        List<NodePermission> nodePermissionList = new ArrayList<>();
        NodePermission nodePermission1 = new NodePermission();
        NodePermission nodePermission2 = new NodePermission();
        NodePermission nodePermission3 = new NodePermission();
        // 动态传入组件权限标识
        nodePermission1.setNodeCode("1");
        nodePermission1.setPermissionFlag("role:1,role:2,role:100");
        nodePermission2.setNodeCode("2");
        nodePermission2.setPermissionFlag("role:1,role:2,role:100");
        nodePermission3.setNodeCode("3");
        nodePermission3.setPermissionFlag("role:1,role:2,role:101");

        nodePermissionList.add(nodePermission1);
        nodePermissionList.add(nodePermission2);
        nodePermissionList.add(nodePermission3);
        variable.setNodePermissionList(nodePermissionList);
        Map<String, Object> variableMap = variable.getVariable();
        TestLeave testLeave = (TestLeave) variableMap.get("testLeave");
        log.info("权限监听器结束");
    }
}
```
### 配置文件
一下配置可通过yml等配置文件设置，也可通过代码设置
```yml
# warm-flow工作流配置
warm-flow:
  # 是否显示banner图，默认是
  banner: true
  # 填充器 （可配置文件注入，也可用@Bean/@Component方式）
  data-fill-handler-path: com.warm.flow.core.test.handle.CustomDataFillHandler
  # 全局租户处理器（可配置文件注入，也可用@Bean/@Component方式）
  tenant_handler_path: com.warm.flow.core.test.handle.CustomTenantHandler
  # 是否开启逻辑删除
  logic_delete: true
  # 逻辑删除字段值（开启后默认为2）
  logic_delete_value: 2
  # 逻辑未删除字段（开启后默认为0）
  logic_not_delete_value: 0
```


```java
@Configuration
public class WarmFlowConfig {

    /**
     * 自定义填充 （自定义填充有限配置文件）
     * @return
     */
    @Bean
    public DataFillHandler dataFillHandler() {
        return new CustomDataFillHandler();
    }
}
```



### 表结构
| **#** | **数据表**      | **名称**       | **备注说明** |
| ----- | --------------- | -------------- | ------------ |
| 1     | flow_definition | 流程定义表     |              |
| 2     | flow_his_task   | 历史任务记录表 |              |
| 3     | flow_instance   | 流程实例表     |              |
| 4     | flow_node       | 流程结点表     |              |
| 5     | flow_skip       | 结点跳转关联表 |              |
| 6     | flow_task       | 待办任务表     |              |



**flow_definition [流程定义表]**

| **#** | **字段**    | **名称**                          | **数据类型**    | **主键** | **非空** | **默认值** | **备注说明** |
| ----- | ----------- | --------------------------------- | --------------- | -------- | -------- | ---------- | ------------ |
| 1     | id          | 主键id                            | BIGINT UNSIGNED | √        | √        |            |              |
| 2     | flow_code   | 流程编码                          | VARCHAR(40)     |          | √        |            |              |
| 3     | flow_name   | 流程名称                          | VARCHAR(100)    |          | √        |            |              |
| 4     | version     | 流程版本                          | VARCHAR(20)     |          | √        |            |              |
| 5     | is_publish  | 是否发布（0未发布 1已发布 9失效） | BIT(1)          |          | √        | 0          |              |
| 6     | from_custom | 审批表单是否自定义（Y是 N否）     | CHAR(1)         |          |          | 'N'        |              |
| 7     | from_path   | 审批表单路径                      | VARCHAR(100)    |          |          |            |              |
| 8     | create_time | 创建时间                          | DATETIME        |          |          |            |              |
| 9     | update_time | 更新时间                          | DATETIME        |          |          |            |              |
| 10     | del_flag | 删除标志                          | CHAR(1)        |          |          |            |              |



**flow_his_task [历史任务记录表]**

| **#** | **字段**         | **名称**                                                     | **数据类型**    | **主键** | **非空** | **默认值** | **备注说明** |
| ----- | ---------------- | ------------------------------------------------------------ | --------------- | -------- | -------- | ---------- | ------------ |
| 1     | id               | 主键id                                                       | BIGINT UNSIGNED | √        | √        |            |              |
| 2     | definition_id    | 对应flow_definition表的id                                    | BIGINT          |          | √        |            |              |
| 3     | instance_id      | 对应flow_instance表的id                                      | BIGINT          |          | √        |            |              |
| 4     | tenant_id        | 租户id                                                       | VARCHAR(40)     |          |          |            |              |
| 5     | node_code        | 开始节点编码                                                 | VARCHAR(100)    |          |          |            |              |
| 6     | node_name        | 开始节点名称                                                 | VARCHAR(100)    |          |          |            |              |
| 7     | node_type        | 开始节点类型（0开始节点 1中间节点 2结束节点 3互斥网关 4并行网关） | BIT(1)          |          | √        |            |              |
| 8     | target_node_code | 目标节点编码                                                 | VARCHAR(100)    |          |          |            |              |
| 9     | target_node_name | 结束节点名称                                                 | VARCHAR(100)    |          |          |            |              |
| 10    | approver         | 审批者                                                       | VARCHAR(40)     |          |          |            |              |
| 11    | permission_flag  | 权限标识（权限类型:权限标识，可以多个，如role:1,role:2)      | VARCHAR(200)    |          |          |            |              |
| 12    | flow_status      | 流程状态（0待提交 1审批中 2 审批通过 8已完成 9已驳回 10失效） | BIT(1)          |          | √        |            |              |
| 13    | gateway_node     | 所属并行网关节点编码                                         | VARCHAR(40)     |          |          |            |              |
| 14    | message          | 审批意见                                                     | VARCHAR(500)    |          |          |            |              |
| 15    | create_time      | 创建时间                                                     | DATETIME        |          |          |            |              |
| 16    | update_time      | 更新时间                          | DATETIME        |          |          |            |              |
| 17     | del_flag | 删除标志                          | CHAR(1)        |          |          |            |              |

**flow_instance [流程实例表]**

| **#** | **字段**      | **名称**                                                     | **数据类型** | **主键** | **非空** | **默认值** | **备注说明** |
| ----- | ------------- | ------------------------------------------------------------ | ------------ | -------- | -------- | ---------- | ------------ |
| 1     | id            | 主键id                                                       | BIGINT       | √        | √        |            |              |
| 2     | definition_id | 对应flow_definition表的id                                    | BIGINT       |          | √        |            |              |
| 3     | business_id   | 业务id                                                       | VARCHAR(40)  |          | √        |            |              |
| 4     | tenant_id     | 租户id                                                       | VARCHAR(40)  |          |          |            |              |
| 5     | node_type     | 结点类型（0开始节点 1中间节点 2结束节点 3互斥网关 4并行网关） | BIT(1)       |          | √        |            |              |
| 6     | node_code     | 流程节点编码                                                 | VARCHAR(40)  |          | √        |            |              |
| 7     | node_name     | 流程节点名称                                                 | VARCHAR(100) |          |          |            |              |
| 8     | variable      | 任务变量                                                     | TEXT         |          |          |            |              |
| 9     | flow_status   | 流程状态（0待提交 1审批中 2 审批通过 8已完成 9已驳回 10失效） | BIT(1)       |          | √        |            |              |
| 10    | create_by     | 创建者                                                       | VARCHAR(64)  |          |          |            |              |
| 11    | create_time   | 创建时间                                                     | DATETIME     |          |          |            |              |
| 12    | update_time   | 更新时间                                                     | DATETIME     |          |          |            |              |
| 13    | ext           | 扩展字段                       | VARCHAR(500) |          |          |            |              |
| 14     | del_flag | 删除标志                          | CHAR(1)        |          |          |            |              |

**flow_node [流程结点表]**

| **#** | **字段**        | **名称**                                                     | **数据类型**    | **主键** | **非空** | **默认值** | **备注说明** |
| ----- | --------------- | ------------------------------------------------------------ | --------------- | -------- | -------- | ---------- | ------------ |
| 1     | id              | 主键id                                                       | BIGINT UNSIGNED | √        | √        |            |              |
| 2     | node_type       | 节点类型（0开始节点 1中间节点 2结束结点 3互斥网关 4并行网关） | BIT(1)          |          | √        |            |              |
| 3     | definition_id   | 流程定义id                                                   | BIGINT          |          | √        |            |              |
| 4     | node_code       | 流程节点编码                                                 | VARCHAR(100)    |          | √        |            |              |
| 5     | node_name       | 流程节点名称                                                 | VARCHAR(100)    |          |          |            |              |
| 6     | permission_flag | 权限标识（权限类型:权限标识，可以多个，如role:1,role:2)      | VARCHAR(200)    |          |          |            |              |
| 7     | coordinate      | 坐标                                                         | VARCHAR(100)    |          |          |            |              |
| 8     | listener_type   | 监听器类型                                                   | VARCHAR(40)     |          |          |            |              |
| 9     | listener_path   | 监听器路径                                                   | VARCHAR(200)    |          |          |            |              |
| 10    | skip_any_node   | 是否可以退回任意节点（Y是 N否）                              | VARCHAR(100)    |          |          | 'N'        |              |
| 11    | version         | 版本                                                         | VARCHAR(20)     |          | √        |            |              |
| 12    | create_time     | 创建时间                                                     | DATETIME        |          |          |            |              |
| 13    | update_time     | 更新时间            | DATETIME        |          |          |            |              |
| 14     | del_flag | 删除标志                          | CHAR(1)        |          |          |            |              |

**flow_skip [结点跳转关联表]**

| **#** | **字段**       | **名称**                                                     | **数据类型**    | **主键** | **非空** | **默认值** | **备注说明** |
| ----- | -------------- | ------------------------------------------------------------ | --------------- | -------- | -------- | ---------- | ------------ |
| 1     | id             | 主键id                                                       | BIGINT UNSIGNED | √        | √        |            |              |
| 2     | definition_id  | 流程定义id                                                   | BIGINT          |          | √        |            |              |
| 3     | node_id        | 当前节点id                                                   | BIGINT          |          | √        |            |              |
| 4     | now_node_code  | 当前流程节点的编码                                           | VARCHAR(100)    |          | √        |            |              |
| 5     | now_node_type  | 当前节点类型（0开始节点 1中间节点 2结束节点 3互斥网关 4并行网关） | BIT(1)          |          |          |            |              |
| 6     | next_node_code | 下一个流程节点的编码                                         | VARCHAR(100)    |          | √        |            |              |
| 7     | next_node_type | 下一个节点类型（0开始节点 1中间节点 2结束节点 3互斥网关 4并行网关） | BIT(1)          |          |          |            |              |
| 8     | skip_name      | 跳转名称                                                     | VARCHAR(100)    |          |          |            |              |
| 9     | skip_type      | 跳转类型（PASS审批通过 REJECT驳回）                          | VARCHAR(40)     |          |          |            |              |
| 10    | skip_condition | 跳转条件                                                     | VARCHAR(200)    |          |          |            |              |
| 11    | coordinate     | 坐标                                                         | VARCHAR(100)    |          |          |            |              |
| 12    | create_time    | 创建时间                                                     | DATETIME        |          |          |            |              |
| 13    | update_time    | 更新时间                           | DATETIME        |          |          |            |              |
| 14     | del_flag | 删除标志                          | CHAR(1)        |          |          |            |              |

**flow_task [待办任务表]**

| **#** | **字段**        | **名称**                                                     | **数据类型** | **主键** | **非空** | **默认值** | **备注说明** |
| ----- | --------------- | ------------------------------------------------------------ | ------------ | -------- | -------- | ---------- | ------------ |
| 1     | id              | 主键id                                                       | BIGINT       | √        | √        |            |              |
| 2     | definition_id   | 对应flow_definition表的id                                    | BIGINT       |          | √        |            |              |
| 3     | instance_id     | 对应flow_instance表的id                                      | BIGINT       |          | √        |            |              |
| 4     | tenant_id       | 租户id                                                       | VARCHAR(40)  |          |          |            |              |
| 5     | node_code       | 节点编码                                                     | VARCHAR(100) |          | √        |            |              |
| 6     | node_name       | 节点名称                                                     | VARCHAR(100) |          |          |            |              |
| 7     | node_type       | 节点类型（0开始节点 1中间节点 2结束节点 3互斥网关 4并行网关） | BIT(1)       |          | √        |            |              |
| 8     | permission_flag | 权限标识（权限类型:权限标识，可以多个，如role:1,role:2)      | VARCHAR(200) |          |          |            |              |
| 9     | flow_status     | 流程状态（0待提交 1审批中 2 审批通过 8已完成 9已驳回 10失效） | BIT(1)       |          | √        |            |              |
| 10    | approver        | 审批者                                                       | VARCHAR(40)  |          |          |            |              |
| 11    | assignee        | 转办人                                                       | VARCHAR(40)  |          |          |            |              |
| 12    | variable        | 任务变量                                                     | TEXT         |          |          |            |              |
| 13    | gateway_node    | 所属并行网关节点编码                                         | VARCHAR(40)  |          |          |            |              |
| 14    | create_time     | 创建时间                                                     | DATETIME     |          |          |            |              |
| 15    | update_time     | 更新时间                      | DATETIME     |          |          |            |              |
| 16     | del_flag | 删除标志                          | CHAR(1)        |          |          |            |              |

### RuoYi-Vue-Warm-Flow切换mybaits-plus
1、根pom.xml，warm-flow-mybatis-sb-starter改为warm-flow-mybatis-plus-sb-starter  
2、ruoyi-flow的pom.xml，warm-flow-mybatis-sb-starter改为warm-flow-mybatis-plus-sb-starter  
3、ruoyi-common增加依赖  
```java
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.5.1</version>
        </dependency>
```
4、MyBatisConfig.java注释掉，新增MybatisPlusConfig  
```java
package com.ruoyi.framework.config;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.BlockAttackInnerInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.OptimisticLockerInnerInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * Mybatis Plus 配置
 *
 * @author ruoyi
 */
@EnableTransactionManagement(proxyTargetClass = true)
@Configuration
public class MybatisPlusConfig
{
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor()
    {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        // 分页插件
        interceptor.addInnerInterceptor(paginationInnerInterceptor());
        // 乐观锁插件
        interceptor.addInnerInterceptor(optimisticLockerInnerInterceptor());
        // 阻断插件
        interceptor.addInnerInterceptor(blockAttackInnerInterceptor());
        return interceptor;
    }

    /**
     * 分页插件，自动识别数据库类型 https://baomidou.com/guide/interceptor-pagination.html
     */
    public PaginationInnerInterceptor paginationInnerInterceptor()
    {
        PaginationInnerInterceptor paginationInnerInterceptor = new PaginationInnerInterceptor();
        // 设置数据库类型为mysql
        paginationInnerInterceptor.setDbType(DbType.MYSQL);
        // 设置最大单页限制数量，默认 500 条，-1 不受限制
        paginationInnerInterceptor.setMaxLimit(-1L);
        return paginationInnerInterceptor;
    }

    /**
     * 乐观锁插件 https://baomidou.com/guide/interceptor-optimistic-locker.html
     */
    public OptimisticLockerInnerInterceptor optimisticLockerInnerInterceptor()
    {
        return new OptimisticLockerInnerInterceptor();
    }

    /**
     * 如果是对全表的删除或更新操作，就会终止该操作 https://baomidou.com/guide/interceptor-block-attack.html
     */
    public BlockAttackInnerInterceptor blockAttackInnerInterceptor()
    {
        return new BlockAttackInnerInterceptor();
    }
}
```
5、ruoyi-admin的application.yml中配置mybatis改为mybatis-plus  

## 流程设计器

### 演示图

<table>
    <tr>
        <td><img src="https://foruda.gitee.com/images/1697704379975758657/558474f6_2218307.png"/></td>
        <td><img src="https://foruda.gitee.com/images/1703576997421577844/a1dc2737_2218307.png"/></td>
    </tr>
    <tr>
        <td><img src="https://foruda.gitee.com/images/1703577051212751284/203a05b0_2218307.png"/></td>
        <td><img src="https://foruda.gitee.com/images/1703577120823449150/ba952a84_2218307.png"/></td>
    </tr>
    <tr>
        <td><img src="https://foruda.gitee.com/images/1703577416508497463/863d8da1_2218307.png"/></td>
        <td><img src="https://foruda.gitee.com/images/1703641952765512992/dc187080_2218307.png"/></td>
    </tr>
    <tr>
        <td><img src="https://foruda.gitee.com/images/1703639870569018221/453a0e0e_2218307.png"/></td>
        <td><img src="https://foruda.gitee.com/images/1703639949778635820/34a6c14e_2218307.png"/></td>
    </tr>
    <tr>
        <td><img src="https://foruda.gitee.com/images/1703640045465410604/c14affda_2218307.png"/></td>
        <td><img src="https://foruda.gitee.com/images/1703641581976369452/e4629da5_2218307.png"/></td>
    </tr>
    <tr>
        <td><img src="https://foruda.gitee.com/images/1703640080823852176/bdf9a360_2218307.png"/></td>
        <td><img src="https://foruda.gitee.com/images/1703640099939146504/b19b2b85_2218307.png"/></td>
    </tr>
    <tr>
        <td><img src="https://foruda.gitee.com/images/1703641659022331552/cc4e0af2_2218307.png"/></td>
        <td><img src="https://foruda.gitee.com/images/1703641675840058630/3430da37_2218307.png"/></td>
    </tr>
    <tr>
        <td><img src="https://foruda.gitee.com/images/1703641687716655707/62a8b20c_2218307.png"/></td>
        <td><img src="https://foruda.gitee.com/images/1703641702939748288/6da6c4f6_2218307.png"/></td>
    </tr>
</table>


### 新增定义

流程编码和流程版本：确定唯一

审批表单路径：记录代办任务需要显示的代办信息页面，保存下代办详情页的路径，点击代办时候获取这个路径，动态加载这个页面

![输入图片说明](https://foruda.gitee.com/images/1703667450784737720/940b2bab_2218307.png "屏幕截图")



### 流程绘制

前端通过logic-flow画图，得到的json转成流程组件所需的xml格式

后台解析xml保存流程表flow_definition、flow_node、flow_skip

![输入图片说明](https://foruda.gitee.com/images/1703668217542373017/a168e1e0_2218307.png "屏幕截图")
![输入图片说明](https://foruda.gitee.com/images/1703668142615887253/95a1485a_2218307.png "屏幕截图")

   

## 流程页面演示

### 开启流程实例

demo项目已经准备了五套流程，以及开启流程代码，开启流程会直接执行到开始节点后一个节点

![输入图片说明](https://foruda.gitee.com/images/1703668403710988300/77dd7ef4_2218307.png "屏幕截图")

![输入图片说明](https://foruda.gitee.com/images/1703668613165514018/981e60e4_2218307.png "屏幕截图")









### 提交流程

提交流程后，流程流转到代表任务，由流程设计中的对应权限人去办理

![输入图片说明](https://foruda.gitee.com/images/1703668493778770778/d77716b5_2218307.png "屏幕截图")

![输入图片说明](https://foruda.gitee.com/images/1703668693940367665/c7206c53_2218307.png "屏幕截图")



### 办理流程

如果是互斥网关则会判断是否满足条件

![输入图片说明](https://foruda.gitee.com/images/1703668882786849328/0b9554ec_2218307.png "屏幕截图")
![输入图片说明](https://foruda.gitee.com/images/1703668896500858952/c9dc78e1_2218307.png "屏幕截图")

![输入图片说明](https://foruda.gitee.com/images/1703669015017157051/5c881c49_2218307.png "屏幕截图")

### 驳回流程

![输入图片说明](https://foruda.gitee.com/images/1703669345903195445/4ba131bc_2218307.png "屏幕截图")

## 流程图

流程图根据前端返回的节点坐标，通过后端Graphics2D进行绘制，最终返回图片给前端展示

![输入图片说明](https://foruda.gitee.com/images/1703669461653266881/c3ddafb1_2218307.png "屏幕截图")

![输入图片说明](https://foruda.gitee.com/images/1703669506555479009/bd1b51cf_2218307.png "屏幕截图")

## 条件表达式

目前内置了大于、大于等、等于、不等于、小于、小于等于、包含、不包含，并且支持扩展

扩展需要实现ExpressionStrategy.java或者继承ExpressionStrategyAbstract.java

并且通过这个方法进行注册ExpressionUtil.setExpression

![输入图片说明](https://foruda.gitee.com/images/1703669588889979582/cbe952be_2218307.png "屏幕截图")

![输入图片说明](https://foruda.gitee.com/images/1703669685489610156/a8e6be49_2218307.png "屏幕截图")

## 流程术语
| 序  号 | 术语      | 术语解释                                                     |
| ------ | --------- | ------------------------------------------------------------ |
| 1      | 审批      | 当前节点处理人，对当前流程节点进行审核操作，完成后进入下一节点 |
| 2      | 驳回/回退 | 当前节点处理人，将流程驳回至之前已经处理过的任务节点，要求重新处理 |
| 3      | 委派/委托 | 当前节点处理人，将自己的主办或者经办权限转移委托至别的用户代为处理，处理完后回到当前处理人手中，并由当前处理人处理完后进入下一节点 |
| 4      | 转办      | 当前节点处理人，将操作权限转给别人处理，处理完后进入下一节点（自己不再处理） |
| 5      | 催办      | 对于时效要求高的流程，发起人可催办提醒当前节点处理人，一般以消息通知方式提醒处理人 |
| 6      | 撤销      | 发起人操作，可以撤销当前流程                                 |
| 7      | 取回      | 当前节点上一节点处理人操作，当前节点处理人还未处理，上一节点处理人可以将其退回自己手中重新操作（取回重办） |
| 8      | 终止      | 当前节点处理人，终止当前流程                                 |
| 9      | 抄送      | 当前节点处理人，处理完成之后将处理结果抄送给其他人，这里创建备注信息，并给所有抄送人创建子任务（待阅），子任务不影响流程流转 |
| 10     | 向前加签  | 当前节点处理人，需要让其他人核对流程，其他人核对完成后，回到当前节点处理人手中，当前节点处理人处理完后进入下一节点 |
| 11     | 向后加签  | 当前节点处理人，需要让其他人核对流程，其他人核对完成后，直接进入下一节点 |
| 12     | 会签      | 会签就是指在流程管理中发起人可以同时对多个人发起会签，多个人可以同时处理，只有所有负责人审批通过，审批节点才会通过。 |
| 13     | 或签      | 一名负责人通过即可通过审批节点                               |
| 14     | 暂存      | 复杂表单，一次性填写不完，需要保存草稿功能，开始节点的暂存   |
|        |           |                                                              |


## 流程规则

 **术语:** 
1. 跳转类型：PASS-审批通过，REJECT-驳回。
1. 跳转条件：根据跳转条件，判断要执行哪个分支，比如“请假天数小于4”。
1. 节点类型：0-开始节点，1-中间节点，2-结束节点。
1. 权限标识：权限类型:权限标识，可以多个，如“role:3” ， “role:3,role:1”或者“role:3,dept:1,user:5”。
1. 所属并行网关节点编码：离上次最近的并行网关节点编码，可传递，遇新网关重置。


 **通用规则：** 
1. 开始节点和结束节点必须有。
1. 开始节点必须有且只有一个跳转条件（跳转节点），中间和网关节点必须有跳转条件，结束节点不需要。
1. 网关节点可不需要跳转类型，互斥网关按照跳转条件流转。
1. 开启流程是传入租户id，就可以后续就可以根据租户id过来任务。
1. 角色权限控制，非必填，流程定义时通过逗号隔开多个权限，流转是传入“role:3” ， “role:3,role:1”或者“role:3,dept:1,user:5”，进行控制。
1. 当流程有多个结束节点，有一个完成，流程实例就算完成
1. 网关节点不可直连。
1. 一票否决（谨慎使用），如果驳回，驳回指向节点后还存在其他正在执行的代办任务，转历史任务，状态都为失效,重走流程。
1. 中间节点不可通过或者驳回到多个中间节点，必须先流转到网关节点
1. 流程变量是全局都能获取，任务变量就当前任务触发的监听器时可以获取。

 **流程状态：** 
1. 待提交：开启流程后的状态
1. 审批中：提交审批后的状态
1. 驳回：就是点击驳回后的状态
1. 失效：是针对并行流程，流程完成后，还存在代办任务，把它转历史记录，历史记录状态无效
1. 审批通过：是任务完成后，代办任务转为历史记录，历史记录状态为审批通过
1. 已完成：流程结束的状态

 **串行网关规则：** 
1. 以串行网关开头，只会执行后面的一条任务路线，以串行网关结尾，只需前面的一条路线完成即可往下执行（最主要限制）。
1. 串行网关需要根据传入跳转条件去判断执行哪个任务路线。


 **并行网关规则：** ：
1. 以并行网关开头，只会必须执行后面的所有任务路线，以并行网关结尾，前面的任务路线必须都完成即可往下执行（最主要限制）。
1. 当流程完成，并行网关范围内还存在代办任务未完成，转历史任务，状态完成。






## 常见问题

1、此项目目前使用的是雪花算法生成id，可能导致前端页面获取丢失精度（感谢【luoheyu】提供测试意见）    
按照这个把long序列化成字符串，前端页面就不会丢失精度了，获取查看hh-vue项目如何处理
http://doc.ruoyi.vip/ruoyi/other/faq.html#%E5%A6%82%E4%BD%95%E5%A4%84%E7%90%86long%E7%B1%BB%E5%9E%8B%E7%B2%BE%E5%BA%A6%E4%B8%A2%E5%A4%B1%E9%97%AE%E9%A2%98

2、生成的流程图中文乱码
由于服务器上缺少中文字体，通过检查fc-list :lang=zh是否包含中文字符集（以下是存在的示例）
```shell
[root@iZbp18ilgi6s1lkbmmfo2jZ zhFonts]# fc-list :lang=zh
/usr/share/fonts/zhFonts/SIMSUN.TTC: 新宋体,NSimSun:style=常规,Regular
/usr/share/fonts/zhFonts/SIMSUN.TTC: 宋体,SimSun:style=常规,Regular
```
将文件解压至 /usr/share/fonts 目录下
```shell
[root@iZbp18ilgi6s1lkbmmfo2jZ fonts]# ll
总用量 8
drwxr-xr-x 2 root root 4096 5月  17 00:20 dejavu
drwxr-xr-x 2 root root 4096 5月  17 11:40 zhFonts
```
重启服务

3、spring开启懒加载后，导致FlowAutoConfig.initFlow()未加载。（由社区【^星^ Q】提供）  
删除"lazy-initialization: true",可解决问题，以下是错误示例

```yml
spring:
  main:
    allow-bean-definition-overriding: true
    lazy-initialization: true
    web-application-type: servlet
``` 

4、出现类型转换异常，检查是否使用热部署插件，比如spring.devtools，可以把插件关了，或者加上排除配置spring-devtools.properties
```properties
restart.include.flow=/io.github.minliuhua.*.jar
```



## **更新记录和未来计划** 

**未来发布计划**

- v1.3.0
  - 每个中间节点都可以自定义表单，多审批节点的，对应不同表单填写
  - 设计器考虑bpmn


**正在执行中的计划**
  - 人员解偶，新增人员表
  - jpa扩展
  - oracle适配
  - 抄送
  - 会签，票签
  - 加减签
  - 转办完善
  - vue3版本设计器


**已完成计划**
- v1.1.90
  - orm支持mybatis-plus扩展
  - 多租户字段隔离提供全局配置，自动获取
  - 增加软删除可以配置化
  - 新增三个测试模块

- v1.1.7 2024-04-27
  - 启动流程时，支持第二个节点为网关节点的情况
  - 开始监听器和结束监听器新增返回当前任务和新建任务集合
  - 修复终止流程bug

- v1.1.6 2024-04-23
  - 支持转办功能
  - 任务自动流转到创建人
  - 考虑流程终止功能
  - 修复流程流转异常

- v1.1.51 2024-04-19
  - 实体类支持序列化
  - 修复java17以上@Resource包路径变更的问题

- v1.1.5
  - 支持自定义填充
  - 新增配置文件，部分功能可配置
  - 重构代码，insService.skip标识即将删除，改用taskService.skip
  - 引入日志门面

- v1.1.42
  - 修复并行网关后面没有中间节点
  - 修复开始任务记录代办，为保存流程状态
  - 新增链式查询排序提供id排序
  - 新增历史任务记录结束节点
  - 新增赋值流程记录创建更新时间
  - 优化表实体类链式赋值
  - 代办已办查询标记为即将删除, 已挪到业务系统中

- v1.1.41
  - 修复已经设置后续节点动态权限后，办理时未生效问题；
  - 枚举扩展getByKey方法 @Holly_Git
  - 调整实例类结构，方便链式写法

- v1.1.4
  - 修复监听器部分判空bug  感谢@Holly_Git
  - 新增创建任务监听器
  - 修改flow_node监听类型和监听路径字段长度
  - 新增监听器生命周期概念，完善文档
  - 重构流程开启流程和流程办理代码
  - 开始节点也能记录到历史任务记录中

- v1.1.3
  - 新增权限监听器，办理中动态设置权限  感谢@Holly

- v1.1.2
  - 流程定义新增复制按钮
  - 补齐sql脚本，完善文档
  - 跳转条件获取方式变更为流程变量  感谢@Holly
  - 监听器变量新增返回结点信息    感谢@Holly
  - 新增根据流程定义和当前节点code获取下一节点api接口.   感谢@Holly
  - 删除多余的字段和代码

- v1.1.0
  - 可以跳转指定节点
  - 增加全局变量
  - 增加监听器
  - 重构代码，解偶orm，方便扩展不同orm和数据，新增代码示例
  - 修复并行网关流程流程图显示错误问题


- v1.0.0
  - 完善流程设计器和流程图，新增vue3版本
  - 放弃js引擎，自研条件表达式
  - 新增支持条件表达式
  - 可退回到任意节点
  - 支持生成流程图 
  - 流程设计器开发
  - 互斥网关，并行网关（会签、或签）功能开发
  - 抽离spring生态依赖，支持solon，并且保持事务与业务系统一致
  - 支持代办任务和已办任务，通过权限标识过滤数据
  - 新增多租户模式
  - 原生提供排序
  - 原生提供分页查询
  - 项目上传中央仓库
  - 工作流模块抽取为独立项目，提供集成方式 
  - 已办任务和任务记录，审批页面中包含业务详情页面 
  - 提供代办任务、提供角色、部门等权限配置
  - 提供流程配置界面
  - 流程配置文件改为表单填报方式
  - 用户角色抽取出来 
  - 整理流程表，调整表名和字段名

## warm组织成员介绍

昵称：warm  
角色：后端开  
个人介绍：研发工程师、技术经理，工作经验8年。爱好撸代码。  



## 你可以请作者喝杯咖啡表示鼓励

![输入图片说明](https://foruda.gitee.com/images/1697770422557390406/7efa04d6_2218307.png "屏幕截图")

