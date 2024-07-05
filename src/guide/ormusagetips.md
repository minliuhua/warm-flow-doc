# orm扩展包使用技巧

## mybatis-plus

### 获取组件中的mapper，使用mybaits-plus的自带方法
```java
  // 获取Mapper方式
  // 第一种
  WarmDaoImpl<Definition> dao = defService.getDao();
  WarmMapper<Definition> mapper = dao.getMapper();
  LambdaQueryWrapper<Definition> queryWrapper = new LambdaQueryWrapper<>();
  queryWrapper.eq(Definition::getFlowCode, "flow_01");
  mapper.selectList(queryWrapper);

  // 第二种
  FlowTaskMapper taskMapper = FrameInvoker.getBean(FlowTaskMapper.class);
  LambdaQueryWrapper<FlowTask> taskWrapper = new LambdaQueryWrapper<>();
  taskWrapper.eq(FlowTask::getBusinessId, "1");
  taskMapper.selectList(taskWrapper);
```

## JPA (springboot/solon 同时适用)

### 1. 工作流组件Service/Dao能力
#### 使用示例
```java
FlowDefinitionDao dao = defService.getDao();
```

### 2. JPA Entity访问能力
#### 注入 unitName=warm-flow-jpa  EntityManager entityManager 对象

```java
@PersistenceContext(unitName = "warm-flow-jpa")
protected EntityManager entityManager;
```
#### 通过@PersistenceContext注解获取工作流各Entity访问能力
```xml
<persistence-unit name="warm-flow-jpa" transaction-type="RESOURCE_LOCAL">
    <class>com.warm.flow.orm.entity.FlowDefinition</class>
    <class>com.warm.flow.orm.entity.FlowHisTask</class>
    <class>com.warm.flow.orm.entity.FlowInstance</class>
    <class>com.warm.flow.orm.entity.FlowNode</class>
    <class>com.warm.flow.orm.entity.FlowSkip</class>
    <class>com.warm.flow.orm.entity.FlowTask</class>
    <class>com.warm.flow.orm.entity.FlowUser</class>
</persistence-unit>
```
#### 使用示例
```java
@PersistenceContext(unitName = "warm-flow-jpa")
protected EntityManager entityManager;

entityManager.find
```

## mybatis-flex

### 获取组件中的mapper，使用mybaits-flex的自带方法
```java
  // 获取Mapper方式
  // 第一种
  WarmDaoImpl<Definition> dao = defService.getDao();
  WarmMapper<Definition> mapper = dao.getMapper();
  QueryWrapper queryWrapper = QueryWrapper.create();
  queryWrapper.in(FlowDefinition::getFlowCode, flowCodeList);
  mapper.selectListByQueryAs(queryWrapper);

  // 第二种
  FlowDefinitionMapper definitionMapper = FrameInvoker.getBean(FlowDefinitionMapper.class);
  QueryWrapper queryWrapper = QueryWrapper.create();
  queryWrapper.in(FlowDefinition::getFlowCode, flowCodeList);
  definitionMapper.selectListByQueryAs(queryWrapper);
```