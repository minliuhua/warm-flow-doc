# 办理人变量表达式
> [!IMPORTANT]  
> 1、业务中，经常会出现设计流程时，还不确定具体办理人是谁，就需要后续能够动态设置办理人功能，此时办理人变量表达式就派上用场了

## 1、特点
- 1、内置常见表达式，同时支持功能强大的spel表达，支持扩展
- 2、支持一对一替换，同时支持多对一的替换，替换集合

```java
 @SpringBootTest
public class VariableTest {

    /**
     * 办理人变量表达式测试
     */
    @Test
    public void testVariable() {
        List<Task> addTasks = new ArrayList<>();
        addTasks.add(FlowFactory.newTask().setPermissionList(Arrays.asList("@@default@@|${handler1}"
                , "@@spel@@|#{@user.evalVar(#handler2)}", "@@default@@|${handler3}"
                , "@@spel@@|#{@user.evalVar(#handler4)}"
                , "@@spel@@|#{@user.evalVarEntity(#handler5)}"
                , "role:1", "1")));
        FlowParams flowParams = new FlowParams();
        Map<String, Object> variable = new HashMap<>();
        variable.put("handler1", Arrays.asList(4, "5", 100L));
        variable.put("handler2", 12L);
        variable.put("handler3", new Object[] {9, "10", 102L});
        variable.put("handler4", "15");
        Task task = FlowFactory.newTask();
        variable.put("handler5", task.setId(55L));

        VariableUtil.replacement(addTasks, variable);
        addTasks.forEach(p -> p.getPermissionList().forEach(System.out::println));
    }
}
```

## 2、内置表达式
- 1、默认办理人变量策略: `@@default@@|${handler1}`
- 2、spel办理人变量策略: `@@spel@@|#{@user.evalVar(#handler2)}`
- 3、@@xxx@@: 标识不同策略的前缀

## 3、变量替换时机
- 1、本节点任务之前的代办任务办理时，传入变量
- 2、本节点任务生成时即可替换完成  

> 比如B-->C, C任务设置办理人变量为`@@default@@|${handler1}`，B任务或者之前任务办理时传入变量`handler1=100`，则C节点办理人变量为100


## 4、默认办理人变量策略

### 前端页面设置变量
- 比如：`@@default@@|${handler1}`
- `@@default@@|${handler1}`中@@default@@表示默认办理人变量策略，handler1是需要被流程变量中替换的标识


<img src="https://foruda.gitee.com/images/1727164067302855332/04f4b2ca_2218307.png"  width="700">



### 后端代码设置变量
```java

// 流程变量
Map<String, Object> variable = new HashMap<>();
variable.put("handler1", "100");
flowParams.variable(variable);

Instance instance = insService.skipByInsId(testLeave.getInstanceId(), flowParams);
```

## 5、spel办理人变量策略

### 前端页面设置变量
- 比如：`@@spel@@|#{@user.evalVar(#handler2)}`
- `#{@user.evalVar(#handler2)}`是spel表达式，`#handler2`是方法入参变量，可以不设置



<img src="https://foruda.gitee.com/images/1727164084637385718/6b68c042_2218307.png"  width="700">



### 后端代码设置变量
```java
/**
 * 用户类
 */
@Component("user")
public class User {

    /**
     * spel办理人变量表达式
     * @param handler2 办理人
     * @return String
     */
    public String evalVar(String handler2) {
        return handler2;
    }
}

// 流程变量
Map<String, Object> variable = new HashMap<>();
variable.put("handler2", "101");
flowParams.variable(variable);

Instance instance = insService.skipByInsId(testLeave.getInstanceId(), flowParams);
```
