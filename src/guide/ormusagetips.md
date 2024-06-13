# orm扩展包使用技巧

## mybatis-plus

### 获取组件中的mapper，使用mybaits的自带方法
```java
  WarmDaoImpl<Definition> dao = defService.getDao();
  WarmMapper<Definition> mapper = dao.getMapper();
  LambdaQueryWrapper<Definition> queryWrapper = new LambdaQueryWrapper<>();
  queryWrapper.eq(Definition::getFlowCode, "flow_01");
  mapper.selectList(queryWrapper);
```