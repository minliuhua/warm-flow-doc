# 条件表达式扩展
> [!IMPORTANT]
> 1、当内置的条件表达式不满足业务需求时，可进行扩展


## 1、实现接口
- 扩展需要实现`ExpressionStrategy`接口或者继承`ExpressionStrategyAbstract`抽象类**  

<table>
    <tr>
        <td><img src="https://foruda.gitee.com/images/1703669588889979582/cbe952be_2218307.png"/></td>
        <td><img src="https://foruda.gitee.com/images/1703669685489610156/a8e6be49_2218307.png"/></td>
    </tr>
</table>

### 1.1、ExpressionStrategy接口
```java
/**
 * 条件表达式
 *
 * @author warm
 */
public interface ExpressionStrategy {

    /**
     * 获取表达式类型
     * @return 表达式类型
     */
    String getType();

    /**
     * 执行表达式
     * @param expression 表达式
     * @param variable 流程变量
     * @return 执行结果
     */
    boolean eval(String expression, Map<String, Object> variable);
}
```

### 1.2、ExpressionStrategyAbstract抽象类

```java
/**
 * 条件表达式抽象类，复用部分代码
 *
 * @author warm
 */
public abstract class ExpressionStrategyAbstract implements ExpressionStrategy {


    /**
     * 执行表达式前置方法 合法性校验
     * @param split 表达式后缀：如flag@@eq@@4
     * @param variable 流程变量
     */
    public void preEval(String[] split, Map<String, Object> variable) {
        AssertUtil.isEmpty(variable, ExceptionCons.NULL_CONDITIONVALUE);
        Object o = variable.get(split[0].trim());
        AssertUtil.isNull(o, ExceptionCons.NULL_CONDITIONVALUE);
    }

    /**
     * 执行表达式
     * @param expression 表达式
     * @param variable 流程变量
     * @return 执行结果
     */
    @Override
    public boolean eval(String expression, Map<String, Object> variable) {
        String[] split = expression.split(FlowCons.splitAt);
        preEval(split, variable);
        String variableValue = String.valueOf(variable.get(split[0].trim()));
        return afterEval(split, variableValue);
    }

    /**
     * 执行表达式后置方法
     * @param split 如flag@@eq@@4
     * @param value 流程变量值
     * @return 执行结果
     */
    public abstract boolean afterEval(String[] split, String value);

}
```

### 1.3、判断是否相等实现类
```java
/**
 * 条件表达式等于 @@eq@@|flag@@eq@@4
 *
 * @author warm
 */
public class ExpressionStrategyEq extends ExpressionStrategyAbstract {

    @Override
    public String getType() {
        return FlowCons.splitAt + "eq" + FlowCons.splitAt;
    }

    @Override
    public boolean afterEval(String[] split, String value) {
        if (MathUtil.isNumeric(split[2].trim())) {
            return MathUtil.determineSize(value, split[2].trim()) == 0;
        } else {
            return value.equals(split[2].trim());
        }
    }

}
```

## 2、注册实现类
- 通过这个方法进行注册ExpressionUtil.setExpression

```java
ExpressionUtil.setExpression(new ExpressionStrategyEq());
```
