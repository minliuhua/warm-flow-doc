# 表结构

> [!IMPORTANT]
>
> 表描述
>
>    流程定义的相关的三张表
>    1、集团军要对某个区域进行长期的军事演练（流程定义表）
>    2、军事演练，有多个演练环节，需要制定任务计划 （流程节点表）
>    3、任务的需要有先后顺序，确保演练按计划推进 （流程跳转表）
>
>    流程实例三张表
>    4、今天要进行一次军事演练（流程实例表）
>    5、首先，按照任务计划，解放军执行第一个任务（待办任务表）
>    6、后续会根据不同情况，进行不同的军事演练任务（待办任务表）
>    7、演练要记录过程 （历史任务表）
>    8、任务的需要分配执行人 (流程用户表)
>    9、最终军事演练完成，流程完成





## 1.1 表清单

| **#** | **数据表**      | **名称**       | **备注说明** |
| ----- | --------------- | -------------- | ------------ |
| 1     | flow_definition | 流程定义表     |              |
| 2     | flow_his_task   | 历史任务记录表 |              |
| 3     | flow_instance   | 流程实例表     |              |
| 4     | flow_node       | 流程节点表     |              |
| 5     | flow_skip       | 节点跳转关联表 |              |
| 6     | flow_task       | 待办任务表     |              |
| 7     | flow_user       | 流程用户表     |              |

 

## 1.2 表字段明细

### 1.2.1 **flow_definition [**流程定义表**]**

| **#** | **字段**        | **名称**                          | **数据类型**    | **主键** | **非空** | **默认值** | **备注说明** |
| ----- | --------------- | --------------------------------- | --------------- | -------- | -------- | ---------- | ------------ |
| 1     | id              | 主键id                            | BIGINT UNSIGNED | √        | √        |            |              |
| 2     | flow_code       | 流程编码                          | VARCHAR(40)     |          | √        |            |              |
| 3     | flow_name       | 流程名称                          | VARCHAR(100)    |          | √        |            |              |
| 4     | version         | 流程版本                          | VARCHAR(20)     |          | √        |            |              |
| 5     | is_publish      | 是否发布（0未发布 1已发布 9失效） | BIT(1)          |          | √        | 0          |              |
| 6     | form_custom     | 审批表单是否自定义（Y是 N否）     | CHAR(1)         |          |          | 'N'        |              |
| 7     | form_path       | 审批表单路径                      | VARCHAR(100)    |          |          |            |              |
| 8     | activity_status | 流程激活状态（0挂起 1激活）       | BIT(1)          |          | √        | 1          |              |
| 9     | listener_type   | 监听器类型                        | VARCHAR(100)    |          |          |            |              |
| 10    | listener_path   | 监听器路径                        | VARCHAR(400)    |          |          |            |              |
| 11    | ext             | 业务详情 存业务表对象json字符串   | VARCHAR(500)    |          |          |            |              |
| 12    | create_time     | 创建时间                          | DATETIME        |          |          |            |              |
| 13    | update_time     | 更新时间                          | DATETIME        |          |          |            |              |
| 14    | del_flag        | 删除标志                          | CHAR(1)         |          |          | '0'        |              |
| 15    | tenant_id       | 租户id                            | VARCHAR(40)     |          |          |            |              |

### 1.2.2 **flow_his_task [**历史任务记录表**]**

| **#** | **字段**         | **名称**                                                     | **数据类型**    | **主键** | **非空** | **默认值** | **备注说明** |
| ----- | ---------------- | ------------------------------------------------------------ | --------------- | -------- | -------- | ---------- | ------------ |
| 1     | id               | 主键id                                                       | BIGINT UNSIGNED | √        | √        |            |              |
| 2     | definition_id    | 对应flow_definition表的id                                    | BIGINT          |          | √        |            |              |
| 3     | instance_id      | 对应flow_instance表的id                                      | BIGINT          |          | √        |            |              |
| 4     | task_id          | 对应flow_task表的id                                          | BIGINT          |          | √        |            |              |
| 5     | node_code        | 开始节点编码                                                 | VARCHAR(100)    |          |          |            |              |
| 6     | node_name        | 开始节点名称                                                 | VARCHAR(100)    |          |          |            |              |
| 7     | node_type        | 开始节点类型（0开始节点 1中间节点 2结束节点 3互斥网关 4并行网关） | BIT(1)          |          |          |            |              |
| 8     | target_node_code | 目标节点编码                                                 | VARCHAR(100)    |          |          |            |              |
| 9     | target_node_name | 结束节点名称                                                 | VARCHAR(100)    |          |          |            |              |
| 10    | approver         | 审批者                                                       | VARCHAR(40)     |          |          |            |              |
| 11    | cooperate_type   | 协作方式(1审批 2转办 3委派 4会签 5票签 6加签 7减签)          | BIT(1)          |          | √        | 0          |              |
| 12    | collaborator     | 协作人                                                       | VARCHAR(40)     |          |          |            |              |
| 13    | skip_type        | 流转类型（PASS通过 REJECT退回 NONE无动作）                   | VARCHAR(10)     |          | √        |            |              |
| 14    | flow_status      | 流程状态（1审批中 2 审批通过 9已退回 10失效）                | VARCHAR(20)     |          | √        |            |              |
| 15    | form_custom      | 审批表单是否自定义（Y是 N否）                                | CHAR(1)         |          |          | 'N'        |              |
| 16    | form_path        | 审批表单路径                                                 | VARCHAR(100)    |          |          |            |              |
| 17    | message          | 审批意见                                                     | VARCHAR(500)    |          |          |            |              |
| 18    | ext              | 业务详情 存业务表对象json字符串                              | VARCHAR(500)    |          |          |            |              |
| 19    | create_time      | 开始时间                                                     | DATETIME        |          |          |            |              |
| 20    | update_time      | 完成时间                                                     | DATETIME        |          |          |            |              |
| 21    | del_flag         | 删除标志                                                     | CHAR(1)         |          |          | '0'        |              |
| 22    | tenant_id        | 租户id                                                       | VARCHAR(40)     |          |          |            |              |

### 1.2.3 **flow_instance [**流程实例表**]**

| **#** | **字段**        | **名称**                                                     | **数据类型** | **主键** | **非空** | **默认值** | **备注说明** |
| ----- | --------------- | ------------------------------------------------------------ | ------------ | -------- | -------- | ---------- | ------------ |
| 1     | id              | 主键id                                                       | BIGINT       | √        | √        |            |              |
| 2     | definition_id   | 对应flow_definition表的id                                    | BIGINT       |          | √        |            |              |
| 3     | business_id     | 业务id                                                       | VARCHAR(40)  |          | √        |            |              |
| 4     | node_type       | 节点类型（0开始节点 1中间节点 2结束节点 3互斥网关 4并行网关） | BIT(1)       |          | √        |            |              |
| 5     | node_code       | 流程节点编码                                                 | VARCHAR(40)  |          | √        |            |              |
| 6     | node_name       | 流程节点名称                                                 | VARCHAR(100) |          |          |            |              |
| 7     | variable        | 任务变量                                                     | TEXT         |          |          |            |              |
| 8     | flow_status     | 流程状态（0待提交 1审批中 2 审批通过 3自动通过 8已完成 9已退回 10失效） | VARCHAR(20)  |          | √        |            |              |
| 9     | activity_status | 流程激活状态（0挂起 1激活）                                  | BIT(1)       |          | √        | 1          |              |
| 10    | create_by       | 创建者                                                       | VARCHAR(64)  |          |          |            |              |
| 11    | create_time     | 创建时间                                                     | DATETIME     |          |          |            |              |
| 12    | update_time     | 更新时间                                                     | DATETIME     |          |          |            |              |
| 13    | ext             | 扩展字段，预留给业务系统使用                                 | VARCHAR(500) |          |          |            |              |
| 14    | del_flag        | 删除标志                                                     | CHAR(1)      |          |          | '0'        |              |
| 15    | tenant_id       | 租户id                                                       | VARCHAR(40)  |          |          |            |              |

### 1.2.4 **flow_node [**流程节点表**]**

| **#** | **字段**        | **名称**                                                     | **数据类型**    | **主键** | **非空** | **默认值** | **备注说明** |
| ----- | --------------- | ------------------------------------------------------------ | --------------- | -------- | -------- | ---------- | ------------ |
| 1     | id              | 主键id                                                       | BIGINT UNSIGNED | √        | √        |            |              |
| 2     | node_type       | 节点类型（0开始节点 1中间节点 2结束节点 3互斥网关 4并行网关） | BIT(1)          |          | √        |            |              |
| 3     | definition_id   | 流程定义id                                                   | BIGINT          |          | √        |            |              |
| 4     | node_code       | 流程节点编码                                                 | VARCHAR(100)    |          | √        |            |              |
| 5     | node_name       | 流程节点名称                                                 | VARCHAR(100)    |          |          |            |              |
| 6     | permission_flag | 权限标识（权限类型:权限标识，可以多个，用逗号隔开)           | VARCHAR(200)    |          |          |            |              |
| 7     | node_ratio      | 流程签署比例值                                               | DECIMAL(6,3)    |          |          |            |              |
| 8     | coordinate      | 坐标                                                         | VARCHAR(100)    |          |          |            |              |
| 9     | skip_any_node   | 是否可以退回任意节点（Y是 N否）                              | VARCHAR(100)    |          |          | 'N'        |              |
| 10    | listener_type   | 监听器类型                                                   | VARCHAR(100)    |          |          |            |              |
| 11    | listener_path   | 监听器路径                                                   | VARCHAR(400)    |          |          |            |              |
| 12    | handler_type    | 处理器类型                                                   | VARCHAR(100)    |          |          |            |              |
| 13    | handler_path    | 处理器路径                                                   | VARCHAR(400)    |          |          |            |              |
| 14    | form_custom     | 审批表单是否自定义（Y是 N否）                                | CHAR(1)         |          |          | 'N'        |              |
| 15    | form_path       | 审批表单路径                                                 | VARCHAR(100)    |          |          |            |              |
| 16    | version         | 版本                                                         | VARCHAR(20)     |          | √        |            |              |
| 17    | create_time     | 创建时间                                                     | DATETIME        |          |          |            |              |
| 18    | update_time     | 更新时间                                                     | DATETIME        |          |          |            |              |
| 19    | del_flag        | 删除标志                                                     | CHAR(1)         |          |          | '0'        |              |
| 20    | tenant_id       | 租户id                                                       | VARCHAR(40)     |          |          |            |              |

### 1.2.5 **flow_skip [**节点跳转关联表**]**

| **#** | **字段**       | **名称**                                                     | **数据类型**    | **主键** | **非空** | **默认值** | **备注说明** |
| ----- | -------------- | ------------------------------------------------------------ | --------------- | -------- | -------- | ---------- | ------------ |
| 1     | id             | 主键id                                                       | BIGINT UNSIGNED | √        | √        |            |              |
| 2     | definition_id  | 流程定义id                                                   | BIGINT          |          | √        |            |              |
| 3     | now_node_code  | 当前流程节点的编码                                           | VARCHAR(100)    |          | √        |            |              |
| 4     | now_node_type  | 当前节点类型（0开始节点 1中间节点 2结束节点 3互斥网关 4并行网关） | BIT(1)          |          |          |            |              |
| 5     | next_node_code | 下一个流程节点的编码                                         | VARCHAR(100)    |          | √        |            |              |
| 6     | next_node_type | 下一个节点类型（0开始节点 1中间节点 2结束节点 3互斥网关 4并行网关） | BIT(1)          |          |          |            |              |
| 7     | skip_name      | 跳转名称                                                     | VARCHAR(100)    |          |          |            |              |
| 8     | skip_type      | 跳转类型（PASS审批通过 REJECT退回）                          | VARCHAR(40)     |          |          |            |              |
| 9     | skip_condition | 跳转条件                                                     | VARCHAR(200)    |          |          |            |              |
| 10    | coordinate     | 坐标                                                         | VARCHAR(100)    |          |          |            |              |
| 11    | create_time    | 创建时间                                                     | DATETIME        |          |          |            |              |
| 12    | update_time    | 更新时间                                                     | DATETIME        |          |          |            |              |
| 13    | del_flag       | 删除标志                                                     | CHAR(1)         |          |          | '0'        |              |
| 14    | tenant_id      | 租户id                                                       | VARCHAR(40)     |          |          |            |              |

### 1.2.6 **flow_task [**待办任务表**]**

| **#** | **字段**      | **名称**                                                     | **数据类型** | **主键** | **非空** | **默认值** | **备注说明** |
| ----- | ------------- | ------------------------------------------------------------ | ------------ | -------- | -------- | ---------- | ------------ |
| 1     | id            | 主键id                                                       | BIGINT       | √        | √        |            |              |
| 2     | definition_id | 对应flow_definition表的id                                    | BIGINT       |          | √        |            |              |
| 3     | instance_id   | 对应flow_instance表的id                                      | BIGINT       |          | √        |            |              |
| 4     | node_code     | 节点编码                                                     | VARCHAR(100) |          | √        |            |              |
| 5     | node_name     | 节点名称                                                     | VARCHAR(100) |          |          |            |              |
| 6     | node_type     | 节点类型（0开始节点 1中间节点 2结束节点 3互斥网关 4并行网关） | BIT(1)       |          | √        |            |              |
| 7     | form_custom   | 审批表单是否自定义（Y是 N否）                                | CHAR(1)      |          |          | 'N'        |              |
| 8     | form_path     | 审批表单路径                                                 | VARCHAR(100) |          |          |            |              |
| 9     | create_time   | 创建时间                                                     | DATETIME     |          |          |            |              |
| 10    | update_time   | 更新时间                                                     | DATETIME     |          |          |            |              |
| 11    | del_flag      | 删除标志                                                     | CHAR(1)      |          |          | '0'        |              |
| 12    | tenant_id     | 租户id                                                       | VARCHAR(40)  |          |          |            |              |

### 1.2.7 **flow_user [**流程用户表**]**

| **#** | **字段**     | **名称**                                                     | **数据类型**    | **主键** | **非空** | **默认值** | **备注说明** |
| ----- | ------------ | ------------------------------------------------------------ | --------------- | -------- | -------- | ---------- | ------------ |
| 1     | id           | 主键id                                                       | BIGINT UNSIGNED | √        | √        |            |              |
| 2     | type         | 人员类型（1待办任务的审批人权限 2待办任务的转办人权限 3待办任务的委托人权限） | CHAR(1)         |          | √        |            |              |
| 3     | processed_by | 权限人                                                       | VARCHAR(80)     |          |          |            |              |
| 4     | associated   | 任务表id                                                     | BIGINT          |          | √        |            |              |
| 5     | create_time  | 创建时间                                                     | DATETIME        |          |          |            |              |
| 6     | create_by    | 创建人                                                       | VARCHAR(80)     |          |          |            |              |
| 7     | update_time  | 更新时间                                                     | DATETIME        |          |          |            |              |
| 8     | del_flag     | 删除标志                                                     | CHAR(1)         |          |          | '0'        |              |
| 9     | tenant_id    | 租户id                                                       | VARCHAR(40)     |          |          |            |              |
