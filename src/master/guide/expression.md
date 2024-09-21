# 条件表达式

## 1、内置表达式
- 1、大于
- 2、大于等于
- 3、等于
- 4、不等于
- 5、小于
- 6、小于等于
- 7、包含
- 8、不包含
- 9、SpEL
- 10、自定义表达式


## 2、Spring Expression Language（SpEL）
- 前端配置如`#{@user.eval()}`表达式，入库前要拼接前缀方便区分表达式类型，最终为`@@spel@@|#{@user.eval()}` 

<img src="https://foruda.gitee.com/images/1726905626290177483/195615fc_2218307.png" width="500" >


- 测试案例`com.warm.flow.sb.test.expression.ExpressionTest`

```java
@Component("user")
public class User {

    public boolean eval() {
        return true;
    }
}

@Slf4j
@SpringBootTest
public class ExpressionTest extends FlowBaseTest {

    /**
     *  @@spel@@|#{@user.eval()}
     */
    @Test
    public void testSpel() {
        Map<String, Object> variable = new HashMap<>();
        variable.put("aa", "yes");
        log.info("spel结果:{}", ExpressionUtil.eval("@@spel@@|#{@user.eval()}", null));
    }
}
```

## 3、自定义表达式

**1、扩展需要实现`ExpressionStrategy`接口或者继承`ExpressionStrategyAbstract`抽象类**  
**2、并且通过这个方法进行注册ExpressionUtil.setExpression**

<table>
    <tr>
        <td><img src="https://foruda.gitee.com/images/1703669588889979582/cbe952be_2218307.png"/></td>
        <td><img src="https://foruda.gitee.com/images/1703669685489610156/a8e6be49_2218307.png"/></td>
    </tr>
</table>