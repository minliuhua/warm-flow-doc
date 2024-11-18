# 办理人变量表达式扩展
> [!IMPORTANT]
> 1、当内置的条件表达式不满足业务需求时，可进行扩展


## 1、 实现接口
- 扩展需要实现`VariableStrategy`接口, 实现`getType和eval`方法

### 1.1、VariableStrategy接口定义
```java
/**
 * 变量替换策略
 *
 * @author warm
 */
public interface VariableStrategy {

    /**
     * 获取变量替换类型
     * @return 变量替换类型
     */
    String getType();

    /**
     * 执行表达式
     * @param expression 表达式
     * @param variable 流程变量
     * @return 执行结果
     */
    String eval(String expression, Map<String, Object> variable);
}
```

### 1.2、DefaultVariableStrategy实现类

```java
/**
 * 默认变量替换策略： @@default@@|${flag}
 *
 * @author warm
 */
public class DefaultVariableStrategy implements VariableStrategy {

    @Override
    public String getType() {
        return FlowCons.splitAt + "default" + FlowCons.splitAt;
    }

    @Override
    public String eval(String expression, Map<String, Object> variable) {
        if (StringUtils.isEmpty(expression) || MapUtil.isEmpty(variable)) {
            return null;
        }
        String result = expression.replace("${", "").replace("}", "");
        Object o = variable.get(result);
        if (ObjectUtil.isNotNull(o)) {
            String variableStr = (String) o;
            if (StringUtils.isEmpty(variableStr)) {
                return null;
            }
            return variableStr;
        }
        return null;
    }
}
```

## 2、注册实现类
- 通过这个方法进行注册VariableUtil.setVariable

```java
VariableUtil.setExpression(new DefaultVariableStrategy());
```
