# 快速开始

在开始之前，我们假定您已经：

* 熟悉 Java 环境配置及其开发
* 熟悉 关系型 数据库，比如 MySQL
* 熟悉 Spring Boot或者Solon 及相关框架
* 熟悉 Java 构建工具，比如 Maven

## 导入sql，按需求执行
>   **如果第一次导入，请先创建数据库，找到组件中的sql目录，找到对应数据库的全量脚本warm-flow-all.sql，执行**  
>   **如果版本更新，找到对应数据库的更新版本，比如xx-upgrade，warm-flow_x.x.x.sql，执行** 



## maven依赖
### 1、mybatis
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

### 2、mybatis-plus
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

## 支持数据库类型
**已经新增mybatis-plus扩展依赖，理论上转换表结构，即可。组件中不存在sql脚本了，全是mybaits-plus语法**

* [x] mysql
* [ ] oracle
* [ ] sqlserver
* [ ] ......


## 支持orm框架类型

* [x] mybatis及其增强组件
* [ ] jpa
* [ ] easy-query
* [ ] wood
* [ ] sqltoy
* [ ] beetlsql
* [ ] ......




> **有想扩展其他orm框架和数据库的可加qq群联系群主**

## 代码示例

https://gitee.com/min290/hh-vue/blob/master/ruoyi-admin/src/test/java/com/ruoyi/system/service/impl/FlowTest.java



### 部署流程

```java
public void deployFlow() throws Exception {
        String path = "/Users/minliuhua/Desktop/mdata/file/IdeaProjects/min/hh-vue/hh-admin/src/main/resources/leaveFlow-serial.xml";
        System.out.println("已部署流程的id：" + defService.importXml(new FileInputStream(path)).getId());
    }
```

### 发布流程

```java
public void publish() throws Exception {
        defService.publish(1212437969554771968L);
    }
```

### 开启流程

```java
public void startFlow() {
        System.out.println("已开启的流程实例id：" + insService.start("1", getUser()).getId());
    }
```

### 流程流转

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

### 监听器
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
## 配置文件
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



## 表结构
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

## RuoYi-Vue-Warm-Flow切换mybaits-plus
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
