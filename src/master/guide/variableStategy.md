# 办理人变量设置

> [!IMPORTANT]
> 目前支持默认支持`@@default@@|${handler}`格式，并且支持扩展

## 前端页面设置变量
- 比如：`@@default@@|${handler},role:1,1`
- `@@default@@|${handler}`中@@default@@表示默认办理人变量策略，handler是需要被流程变量中替换的标识
- `role:1,1`表示办理人角色和具体办理人


<img src="https://foruda.gitee.com/images/1726798103639689650/36597695_2218307.png">



## 后端代码设置变量
```java
// 流程变量
Map<String, Object> variable = new HashMap<>();
variable.put("handler1", "100");
variable.put("handler2", "101");
flowParams.variable(variable);

Instance instance = insService.skipByInsId(testLeave.getInstanceId(), flowParams);
```

## 扩展

- 扩展需要实现`VariableStrategy`接口, 实现`getType和eval`方法
- 并且通过这个方法进行注册VariableUtil.setVariable

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
