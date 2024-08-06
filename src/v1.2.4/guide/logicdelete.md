# 逻辑删除

## 1、Mybatis-plus
> **Mybatis-plus只支持自身的逻辑删除方式**
### 1.1、spring
```yml
# mybatis-plus配置
mybatis-plus:
  global-config:
    db-config:
      logic-delete-field: delFlag # 全局逻辑删除字段名
      logic-delete-value: 2 # 逻辑已删除值
      logic-not-delete-value: 0 # 逻辑未删除值
```

### 1.2、solon

```yaml
# 配置数据源对应的 mybatis 信息（要与 DataSource bean 的名字对上）
mybatis.db1:
  configuration: #扩展配置（要与 MybatisConfiguration 类的属性一一对应）
    cacheEnabled: false
    mapperVerifyEnabled: false #如果为 true，则要求所有 mapper 有 @Mapper 主解
    mapUnderscoreToCamelCase: true
  globalConfig: #全局配置（要与 GlobalConfig 类的属性一一对应）
    banner: false
    logicDeleteValue: 2 # 逻辑已删除值
    logicNotDeleteValue: 0 # 逻辑未删除值
```

## 2、通用逻辑删除

```yaml
# warm-flow工作流配置
warm-flow:
  # 是否开启逻辑删除（orm框架本身不支持逻辑删除，可通过这种方式开启，比如jpa）
  logic_delete: true
  # 逻辑删除字段值（开启后默认为2）
  logic_delete_value: 2
  # 逻辑未删除字段（开启后默认为0）
  logic_not_delete_value: 0
```