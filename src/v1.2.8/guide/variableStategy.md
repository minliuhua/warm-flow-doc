# 办理人变量设置

## 1、内置表达式
- 1、`@@default@@|${handler}`：handler是需要被流程变量中替换的标识
- 2、`@@spel@@|#{@user.evalVar()}`：#{@user.evalVar()}是spel表达式

## 2、前端页面设置变量
- 比如：`@@default@@|${handler},role:1,1`
- `@@default@@|${handler}`中@@default@@表示默认办理人变量策略，handler是需要被流程变量中替换的标识
- `role:1,1`表示办理人角色和具体办理人


<img src="https://foruda.gitee.com/images/1726853154599353388/9855305f_2218307.png">



## 3、后端代码设置变量
```java
// 流程变量
Map<String, Object> variable = new HashMap<>();
variable.put("handler", "100");
flowParams.variable(variable);

Instance instance = insService.skipByInsId(testLeave.getInstanceId(), flowParams);
```

## 4、扩展

- 扩展需要实现`VariableStrategy`接口, 实现`getType和eval`方法
- 并且通过这个方法进行注册VariableUtil.setVariable

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
