# 办理人变量表达式扩展
> [!IMPORTANT]
> 1、当内置的条件表达式不满足业务需求时，可进行扩展


## 1、 实现接口
- 扩展需要实现`VariableStrategy`接口, 实现`getType和eval`方法

### 1.1、VariableStrategy接口定义
```java
/**
 * 策略类接口
 *
 * @author warm
 */
public interface ExpressionStrategy<T> {

    /**
     * 获取策略类型
     *
     * @return 类型
     */
    String getType();

    /**
     * 是否截取表达式前缀，然后在进行执行，默认不截取
     * 如果截取，比如@@spel@@|#{@user.evalVar()} , 截取@@spel@@|，后再执行#{@user.evalVar()}解析
     *
     * @return 类型
     */
    default Boolean isIntercept() {
        return false;
    }

    /**
     * 执行表达式
     *
     * @param expression 表达式
     * @param variable   流程变量
     * @return 执行结果
     */
    T eval(String expression, Map<String, Object> variable);


    /**
     * 设置表达式
     * @param expressionStrategy 表达式
     */
    void setExpression(ExpressionStrategy<T> expressionStrategy);

}

/**
 * 办理人变量表达式策略
 *
 * @author warm
 */
public interface VariableStrategy extends ExpressionStrategy<List<String>> {

    /**
     * 办理人变量表达式策略实现类集合
     */
    List<ExpressionStrategy<List<String>>> expressionStrategyList = new ArrayList<>();

    default void setExpression(ExpressionStrategy<List<String>> expressionStrategy) {
        expressionStrategyList.add(expressionStrategy);
    }
}
```

### 1.2、DefaultVariableStrategy实现类

```java
/**
 * 默认办理人变量表达式策略： @@default@@|${flag}
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
- 通过这个方法进行注册ExpressionUtil.setVariable

```java
ExpressionUtil.setExpression(new DefaultVariableStrategy());
```
