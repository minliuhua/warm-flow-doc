# 配置文件

```yml
# warm-flow工作流配置
warm-flow:
  # 是否显示banner图，默认是
  banner: true
  # 填充器 （可配置文件注入，也可用@Bean/@Component方式）
  data-fill-handler-path: com.ruoyi.system.handle.CustomDataFillHandler
  # 全局租户处理器（可配置文件注入，也可用@Bean/@Component方式）
  tenant_handler_path: com.ruoyi.system.handle.CustomTenantHandler
  # 是否开启逻辑删除
  logic_delete: true
  # 逻辑删除字段值（开启后默认为2）
  logic_delete_value: 2
  # 逻辑未删除字段（开启后默认为0）
  logic_not_delete_value: 0
  # 当使用JPA时指定JpaPersistenceProvider
  jpa_persistence_provider: org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider
  # 数据源类型, mybatis模块对orm进一步的封装, 由于各数据库分页语句存在差异,
  # 当配置此参数时, 以此参数结果为基准, 未配置时, 取DataSource中数据源类型,
  # 兜底为mysql数据库
  data_source_type: mysql
```


```java
@Configuration
public class WarmFlowConfig {

    /**
     * 自定义填充 （可配置文件注入，也可用@Bean/@Component方式）
     */
    @Bean
    public DataFillHandler dataFillHandler() {
        return new CustomDataFillHandler();
    }

    /**
     * 全局租户处理器（可配置文件注入，也可用@Bean/@Component方式）
     */
    @Bean
    public TenantHandler tenantHandler() {
        return new CustomTenantHandler();
    }
}
```