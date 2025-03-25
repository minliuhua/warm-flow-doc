# orm扩展包使用技巧

## mybatis-plus

**获取组件中的mapper，使用mybaits-plus的自带方法**
```java
  // 获取Mapper方式
  FlowTaskMapper taskMapper = FrameInvoker.getBean(FlowTaskMapper.class);
  LambdaQueryWrapper<FlowTask> taskWrapper = new LambdaQueryWrapper<>();
  taskWrapper.eq(FlowTask::getBusinessId, "1");
  taskMapper.selectList(taskWrapper);
```

## JPA

**注入 unitName=warm-flow-jpa  EntityManager entityManager 对象**

```java
@PersistenceContext(unitName = "warm-flow-jpa")
protected EntityManager entityManager;
```
**通过上述注解获取工作流组件内各Entity访问能力**
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
**以下为主要接口示例，更多接口请参考 EntityManager 接口**
```java
@PersistenceContext(unitName = "warm-flow-jpa")
protected EntityManager entityManager;

FlowDefinition entity = dao.newEntity();
// entity 字段填充
// 持久化保存数据
entityManager.persist(entity); 

// 通过主键查找数据
FlowDefinition existEntity = entityManager.find(FlowDefinition.class, 1l);

// 复杂查询语句通过 CriteriaQuery<T> criteriaQuery 
CriteriaQuery<T> criteriaQuery = ...
// select语句获取结果
entityManager.createQuery(criteriaQuery).getResultList();

// 更新操作使用 CriteriaUpdate<T> criteriaUpdate 
CriteriaUpdate<T> criteriaUpdate = ...
entityManager.createQuery(criteriaUpdate).executeUpdate()
```
**JPA注意事项** JPA涉及持久化操作必须开启事务  @Transactional(spring) @Tran(solon)


## mybatis-flex

**获取组件中的mapper，使用mybaits-flex的自带方法**
```java
  // 获取Mapper方式
  FlowDefinitionMapper definitionMapper = FrameInvoker.getBean(FlowDefinitionMapper.class);
  QueryWrapper queryWrapper = QueryWrapper.create();
  queryWrapper.in(FlowDefinition::getFlowCode, flowCodeList);
  definitionMapper.selectListByQueryAs(queryWrapper);
```
