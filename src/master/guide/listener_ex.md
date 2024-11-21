# 监听器表达式扩展
> [!IMPORTANT]
> 1、当内置的监听器表达式不满足业务需求时，可进行扩展


## 1、 实现接口
- 扩展需要实现`ListenerStrategy`接口, 实现`getType和eval`方法

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
 * 监听器表达式策略接口
 *
 * @author warm
 */
public interface ListenerStrategy extends ExpressionStrategy<Boolean> {

    /**
     * 监听器表达式策略实现类集合
     */
    List<ExpressionStrategy<Boolean>> expressionStrategyList = new ArrayList<>();

    default void setExpression(ExpressionStrategy<Boolean> expressionStrategy) {
        expressionStrategyList.add(expressionStrategy);
    }

}
```

### 1.2、ListenerStrategySpel实现类

```java
/**
 * spel监听器表达式 @@spel@@|#{@user.eval()}
 *
 * @author warm
 */
public class ListenerStrategySpel implements ListenerStrategy {

    @Override
    public String getType() {
        return "#";
    }

    @Override
    public Boolean eval(String expression, Map<String, Object> variable) {
        SpelHelper.parseExpression(expression, variable);
        // 恒返回true，说明匹配上监听器表达式，扩展策略也一定要返回true
        return true;
    }
}
```

## 2、注册实现类
- 通过这个方法进行注册ExpressionUtil.setVariable

```java
ExpressionUtil.setExpression(new ListenerStrategySpel());
```
