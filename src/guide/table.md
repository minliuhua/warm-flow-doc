# 表结构

```
表描述：
流程定义的相关的三张表
1、解放军要对某个区域进行长期的军事演练（流程定义表）
2、军事演练，有多个演练环节，需要制定任务计划 （流程节点表）
3、任务的需要有先后顺序 （流程跳转表）

流程示例三张表
4、今天要进行一次军事演练（流程实例表）
5、首先，按照任务计划，解放军执行第一个任务（代办任务表）
6、后续会根据不同情况，进行不同的军事演练任务（代办任务表）
7、演练要记录过程 （历史任务表）
8、最终军事演练完成，流程完成
```

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
