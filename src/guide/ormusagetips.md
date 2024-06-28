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
  LambdaQueryWrapper<Task> taskWrapper = new LambdaQueryWrapper<>();
  taskWrapper.eq(Task::getBusinessId, "1");
  mapper.selectList(taskWrapper);
```