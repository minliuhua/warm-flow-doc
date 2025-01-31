# 更新日志

> [!IMPORTANT]
> 更新脚本在项目里面的sql文件下，对应数据库类型，对应版本号

## 未来发布计划

### vx.x.x

- 事件
- 流程图合法性检验
- 把不能退回到开始节点去掉，会有什么影响
- 子流程
- 会签和票签通过率策略，支持扩展
- 重启流程
- 适配国产数据库
- 包容网关

## 开发中计划

### v1.3.6

- 【升级指南】
  - 无

- 更新日志
  - 新增流程图元数据 @晓华
  - 接入仿钉钉设计器 @Zhen

### v1.3.5

- 【升级指南】
    - 无

- 更新日志
    - 动态表单支持 @vanlin
    - 取回 @xiarigang
    - 可多个网关直连 @晓华
    - 开启流程可以不默认执行到中间节点 @晓华
    - 新增办理人选择项接口 @晓华
    - [feat] 流程定义数据保存支持json格式 @xiarigang

## 更新日志
### v1.3.4 2024-11-25

- 【升级指南】
  - 办理人变量表达式，删除策略前缀，通过$和#区分，需执行1.3.4增量脚本sql
  - 依赖的groupId：org.dromara，改为org.dromara.warm
  - 如果扩展了条件表达式策略
    - 接口或者抽象类前缀由`ExpressionStrategy`改为 `ConditionStrategy`
    - 全局搜索`org.dromara.warm.flow.core.expression` 替换为`org.dromara.warm.flow.core.expression`,然后检查是否正确

- 更新日志
  - [feat] 新增监听器spel表达式，并且支持扩展
  - [feat] 增加全局监听器，针对整个系统，通过接口接入方式
  - [feat] 新增审批前获取当前办理人接口，类似satoken方式 @huangjian
  - [feat] 流程变量表达式支持替换集合 @huangjian
  - [feat] 设计器引入，新增支持solon
  - [feat] 新增创建流程定义，默认初始化节点
  - [feat] 新增根据流程定义id集合，查询流程实例集合api
  - [update] 监听器优化配置（类中配置增加类型接口，或者优化页面配置）
  - [update] 重新定义监听器名称，原全局监听器改名为流程监听器，局部监听器改名为节点监听器
  - [update] 已经开启过审批任务的不可取消发布和删除
  - [update] 转办、委派、加签和减签，增加参数合法性校验
  - [update] 修改流程变量传递方式，可通过办理人变量表达式或者分派监听器，初始化后续所有办理人
  - [update] 加载handler取消懒加载，重构test项目
  - [update] 办理人变量表达式，删除策略前缀，通过$和#区分
  - [update] 流程版本号默认改完自动递增，不接收外部设置
  - [update] 修改项目的groupId
  - [refactor] 重构条件表达式和办理人变量表达式
  - [remove] 移除权限监听器

### v1.3.3 2024-11-12

- 【升级指南】
    - 独立设计器放行路径增加`/warm-flow`，如果想要共享后端权限(比如token)，可不增加，并且按照官网流程设计器引入进行设置

- 更新日志
    - [feat] 新增支持接入业务系统token，支持多token
    - [update] 办理人选择tabs切换
    - [update] 没有左侧树状选择数据时，左侧隐藏
    - [fix] 统一修复分页bug
    - [fix] 修复删除流程实例信息，未删除办理人信息 @xiarigang
    - [fix] 修改【Bug】 会签节点委派 @vanlin
    - [fix] 统一修复分页bug

### v1.3.1 2024-11-01

- 【升级指南】
    - 依赖的groupId：io.github.minliuhua，改为org.dromara
    - 包名：com.warm， 改为org.dromara.warm
    - 节点详情进入改为双击
    - 终止操作的流程状态改为更合理的终止状态，如需还想按照原本的自动完成，请使用自定义流程状态
    - FlowParams对象删除setXxx(yyy)方法，改为xxx(yyy)方法赋值
    - 转办、委派、加签和减签方法，老方法标识即将删除, 请尽快使用新的接口
    - 终止免校验权限改为设置ignore字段
    - 设计器引入优化
        - 设计器后端放行地址`/warm-flow/**`删除，不再需要
        - 前端加载设计器代理配置,vue.config.js或者nginx中的代理，`/warm-flow-ui/`删除，不再需要
        - iframe中访问设计器接口由`/warm-flow-ui/${definitionId}?disabled=${disabled}`，改为VUE_APP_BASE_API +
          `/warm-flow-ui/index.html?id=${definitionId}&disabled=${disabled}`
        - VUE_APP_BASE_API是前端访问前缀比如`prod-api`

- 更新日志
    - [feat] 新增boot3+java17支持
    - [feat] 流程设计器新增快捷键支持
    - [feat] 新增流程状态枚举（终止、作废、撤销和取回）
    - [feat] 新增转办、委派、加签和减签方法，老方法标识即将删除，接入监听器
    - [update] 终止流程状态改为更合理的终止状态
    - [update] 流程复制克隆改set/get赋值
    - [refactor] 重构skip等方法通用校验
    - [perf] 流程图清晰度调整
    - [fix] 流程图查询异常处理
    - [fix] 修复历史记录表，创建时间和更新时间一样的问题
    - [remove] FlowParams对象删除setXxx(yyy)方法，改为xxx(yyy)方法赋值

### v1.3.0 2024-10-23

- 【升级指南】
    - 执行升级脚本【warm-flow_1.3.0.sql】

- 更新日志
    - [feat] 设计器独立 @zhen
    - [feat] 使用jar引入方式引入设计器
    - [feat] 新增办理人变量表达式流程案例
    - [feat] 新增方法，获取流程变量的map类型
    - [update] 节点线条保存关联名称
    - [fix] 修复mybatis扩展包中，flowStatus变量书写错误的问题
    - [fix] 更新时间有值时，取更新时间，不是创建时间

### v1.2.10 2024-09-26

- 【升级指南】
    - 无

- 更新日志
    - [fix] 修复mybatis-plus扩展包，配置了其他id策略不生效的问题

### v1.2.8 2024-09-25

- 【升级指南】
    - 本次升级，内置json库snack3方式，改为spi方式加载，业务项目中存在哪种json就会使用哪种的实现，
      支持顺序按顺序加载一种：snack3、jackson、fastjson、gson，并且目前只实现了这四种，可扩展
    - 如在未集成snack3库的环境下，还需要使用snack3库，需要单独使用（原组件使用snack3库）
      ```pom.xml
            <dependency>
                <groupId>org.noear</groupId>
                <artifactId>snack3</artifactId>
                <version>3.2.88</version>
            </dependency>
       ```

- 更新日志
    - [feat] json库支持snack3、jackson、fastjson和gson，并且支持扩展
    - [feat] 增加办理人变量表达式，支持${xxx}替换和spel，并支持扩展
    - [feat] ListenerVariable监听器变量新增FlowParams字段，方便开始监听器全局传递参数
    - [feat] 终止新增对开始和完成监听器的支持
    - [update] springboot项目的条件表达式默认支持spel
    - [update] 历史记录改为单条保存，删除重复代码
    - [update] 修改FlowUserDao的bean名称
    - [update] 中间节点拆分为或签，会签，票签
    - [fix] 修复历史记录创建时间相等，导致流程图渲染异常
    - [fix]修复Mybatis逻辑删除变成真实删除的缺陷 @xiarigang
    - [refactor] 重构id生成器，支持orm默认策略，删除数据填充默认实现类，改为匿名类

### v1.2.7 2024-09-03

- 【升级指南】
    - 无

- 更新日志
    - [update] 历史任务表流程状态支持外部传入
    - [update] 修改办理人接口，当未设置办理人时，不做权限校验
    - [update] ModifyHandler增加链式调用
    - [fix] 修复流程监听器导出失败的问题

### v1.2.6 2024-08-28

- 【升级指南】
    - 执行升级脚本【warm-flow_1.2.6.sql】
    - 流程状态字段flow_status改为string类型，业务系统需要对应修改

- 更新日志
    - [feat] 增加获取下个节点集合api @xiarigang
    - [feat] 流程监听器 @xiaoxiaoliu889
    - [feat] id内存策略新增14、15位雪花算法支持
    - [feat] 流程激活和挂起案例 @xiaoxiaoliu889
    - [feat] 增加基于流程定义Id获取流程图 @xiaoxiaoliu889
    - [update] 流程状态改成字符串类型 @xiarigang
    - [update] 测试模块拆分独立仓库
    - [update] modes-sb删除加载配置文件，改为有上层jar加载
    - [update] flex solon版本yml弄错了，config调整
    - [refactor] 流程版本号生成逻辑重构 @xiaoxiaoliu889
    - [fix] 修复deleteByTaskIds 中的根据无法正确删除user数据
    - [fix] 修复 jpa solon注解问题 @vanlin
    - [fix] 修复 并行网关三个任务分支的时候，错误结束流程的问题

### v1.2.4 2024-08-14

- 【升级指南】
    - 执行升级脚本【warm-flow_1.2.4.sql】
    - 流程定义表from_custom改为form_custom，from_path改为form_path，涉及到这两个字段的前后段都要修改
    - 反显审批流程表单，改为通过task表新增的form_custom和form_path字段
    - 只针对mybatis-plus扩展包，其他的扩展包可忽略，多租户和逻辑删除，改为通过mybatis-plus的自带的方式实现(
      可参考官网文章逻辑删除和多租户)，并且流程表的逻辑删除字段都更新为0
    - 原本的我发起[warmFlowInitiator], 组件内部不在维护替换，由分派监听器实现替换

- 更新日志
    - [feat] 激活和挂起 @xiaoxiaoliu889
    - [feat] 不同节点也支持配置审批表单路径 @vanlin
    - [feat] 支持接收外部流程状态，支持流程状态扩展 @vanlin
    - [feat] 新增spel条件表达式，新增可通过SPI机制加载条件表达式
    - [feat] 新增分派监听器，支持代办任务中办理人等动态修改 @liangli
    - [feat] 新增Easy-Query框架支持 @link2fun
    - [feat] 新增Mybatis-Flex的solon扩展包 @xiarigang
    - [feat] 新增Jpa的solon扩展包 @vanlin
    - [feat] 历史表新增跳转类型，记录跳转类型 @vanlin
    - [feat] 增加组件加载，yml控制开关 @疯狂的狮子Li
    - [update] 之前强依赖流程状态的通过的，改为跳转类型，历史数据考虑如何处理 @vanlin
    - [update] 之前所有保存流程状态地方，全部提供可接受外部传入 @vanlin
    - [update] 流程开启，校验节点是否发布，提示语增加流程编码
    - [update] 删除校验是否任意跳转
    - [update] 修改扩展字段ext注释，删除FlowConfigUtil多余的代码
    - [update] SqlSessionFactory改为构造函数引入
    - [update] 替换异常类，UtilException高版本不兼容
    - [update] from_custom改为form_custom，from_path改为form_path
    - [remove] 移除节点前置执行权限处理器
    - [remove] 删除cooperateAutoPass方法
    - [update] 代办改为待办
    - [refactor] 重构测试模块，完善mybatis-plus多租户和逻辑删除使用方式
    - [refactor] 重构solon和插件模块
    - [fix] 修复加签批量提交报错
    - [fix] 修复TaskServiceImpl#handleDepute方法中删除受托人传参数错误
    - [fix] 修复 JPA flowUserDao bug @vanlin
    - [fix] 流程第三个节点为网关时无法渲染颜色
    - [fix] 修复查看流程图模糊的问题 @erfeijiadao
    - [fix] 修復开始节点直连网关，流程图渲染有问题
    - [fix] 修复不能退回，未完成过任务
    - [fix] 修复流程定义和流程实例相同，处于非结束节点，流程实例不能存在相同的业务id
    - [fix] 修复不能退回，未完成过任务
    - [fix] 删除不必要的··符号，修复postgresql与mysql关键词符号问题。
    - [fix] 修复流程已完成，流程图结束节点显示为黑色
    - [fix] 修复已办任务查询审批想起无效问题
    - [fix] 设置开始节点 skip_type = PASS
    - [fix] 为SpringUtil指定bean name,解决 LocalContainerEntityManagerFactoryBean 依赖问题
    - [chore] 升级dom4j为安全版本2.1.3

### v1.2.3 2024-06-28

- 更新日志
    - [fix] 修复更新拼上了多余的条件
    - [fix] 修复保存流程xml报错问题

### v1.2.1 2024-06-28

- 【升级指南】
    - 执行升级脚本【warm-flow_1.2.1.sql】

- 更新日志
    - [feat] 新增mybatis-flex扩展包 @xiarigang
    - [feat] 新增抄送演示案例 @adru*
    - [feat] 历史记录表新增ext扩展字段，方便保存历史过程数据 @adru*
    - [update] 保存下一个节点办理人时，不校验是否有审批人
    - [update] 调整扩展包配置，新增测试模块
    - [update] 票签,会签，将待办任务的创建时间赋予历史任务开始时间 @liutao
    - [update] 调整mybatis-plus多租户和软件删除处理
    - [update] 修改任务历史表时间定义，任务审批通过，将待办任务的创建时间赋予历史任务开始时间 @liutao*
    - [update] 修正pg的sql文件名，新增1.2.1增量sql @liutao
    - [update] 会签票签，开始时间记录代表任务的创建时间
    - [remove] 删除监听器自定义参数,修改扩展字段名称
    - [fix] 监听器问题修复 @liangli
    - [fix] solon插件包增加userMapper.xml加载
    - [fix] 修复填充器不接收外部设置的时间
    - [fix] 修复userMapper.xml中updateLogic的某个负值错误

### v1.2.0  2024-06-13

- 【升级指南】
    - 执行升级脚本【warm-flow_1.2.0.sql】
    - 工具包路径调整

- 更新日志
    - 待办表解偶用户，新增用户表（查询方式需要改动）
    - 会签，票签
    - 加减签
    - 转办完善
    - jpa扩展
    - oracle适配
    - pg适配

### v1.1.9  2024-05-08

- 【升级指南】
    - 执行升级脚本【warm-flow_1.1.90.sql】

- 更新日志
    - orm支持mybatis-plus扩展
    - 多租户字段隔离提供全局配置，自动获取
    - 增加软删除可以配置化
    - 新增三个测试模块
    - 修复设置默认填充器时候，判空错误

### v1.1.7 2024-04-27

- 更新日志
    - 启动流程时，支持第二个节点为网关节点的情况
    - 开始监听器和完成监听器新增返回当前任务和新建任务集合
    - 修复终止流程bug

### v1.1.6 2024-04-23

- 更新日志
    - 支持转办功能
    - 任务自动流转到创建人
    - 考虑流程终止功能
    - 修复流程流转异常
    - 实体类支持序列化
    - 修复java17以上@Resource包路径变更的问题

### v1.1.5 2024-04-17

- 更新日志
    - 支持自定义填充
    - 新增配置文件，部分功能可配置
    - 重构代码，insService.skip标识即将删除，改用taskService.skip
    - 引入日志门面
    - 修复已经设置后续节点动态权限后，办理时未生效问题；
    - 枚举扩展getByKey方法 @Holly_Git
    - 调整实例类结构，方便链式写法
    - 修复并行网关后面没有中间节点
    - 修复开始任务记录待办，为保存流程状态
    - 新增链式查询排序提供id排序
    - 新增历史任务记录结束节点
    - 新增赋值流程记录创建更新时间
    - 优化表实体类链式赋值
    - 待办已办查询标记为即将删除, 已挪到业务系统中

### v1.1.4 2024-04-07

- 更新日志
    - 修复监听器部分判空bug 感谢@Holly_Git
    - 新增创建任务监听器
    - 修改flow_node监听类型和监听路径字段长度
    - 新增监听器生命周期概念，完善文档
    - 重构流程开启流程和流程办理代码
    - 开始节点也能记录到历史任务记录中

### v1.1.3 2024-04-02

- 更新日志
    - 新增权限监听器，办理中动态设置权限 感谢@Holly

### v1.1.2 2024-03-27

- 更新日志
    - 流程定义新增复制按钮
    - 补齐sql脚本，完善文档
    - 跳转条件获取方式变更为流程变量 感谢@Holly
    - 监听器变量新增返回结点信息 感谢@Holly
    - 新增根据流程定义和当前节点code获取下一节点api接口. 感谢@Holly
    - 删除多余的字段和代码

### v1.1.1 2024-03-22

- 更新日志
    - [fix] 修复xml脚本中遗漏伪命的问题，完善sql

### v1.1.0 2024-03-21

- 更新日志
    - 可以跳转指定节点
    - 增加全局变量
    - 增加监听器
    - 重构代码，解偶orm，方便扩展不同orm和数据，新增代码示例
    - 修复并行网关流程流程图显示错误问题

### v1.0.4 2024-03-06

- 更新日志
    - [update] 美化后台返回的流程图

### v1.0.3 2024-03-05

- 更新日志
    - [update] 重构代码，解偶orm操作，方便扩展其他orm框架

### v1.0.2 2023-12-31

- 更新日志
    - [fix] 修复solon版本业务系统可不用单独加载warm-flow的xml

### v1.0.0 2023-12-28

- 更新日志
    - 完善流程设计器和流程图，新增vue3版本
    - 放弃js引擎，自研条件表达式
    - 新增支持条件表达式
    - 可退回到任意节点
    - 支持生成流程图
    - 流程设计器开发
    - 互斥网关，并行网关（会签、或签）功能开发
    - 抽离spring生态依赖，支持solon，并且保持事务与业务系统一致
    - 支持待办任务和已办任务，通过权限标识过滤数据
    - 新增多租户模式
    - 原生提供排序
    - 原生提供分页查询
    - 项目上传中央仓库
    - 工作流模块抽取为独立项目，提供集成方式
    - 已办任务和任务记录，审批页面中包含业务详情页面
    - 提供待办任务、提供角色、部门等权限配置
    - 提供流程配置界面
    - 流程配置文件改为表单填报方式
    - 用户角色抽取出来
    - 整理流程表，调整表名和字段名
