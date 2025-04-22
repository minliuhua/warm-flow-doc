# 条件表达式
<!-- @include: ../other/betweengg.md -->

::: tip
- 在执行互斥网关时候，抉择是执行哪个分支，可以通过条件表达式来判断

:::


## 1、内置表达式类型
- 1、默认: `default@@${flag == 5 && flag > 4}`
- 2、SpEL: `spel@@#{@user.eval(#flag)}`
- 3、大于: `gt@@flag|4`
- 4、大于等于: `ge@@flag|4`
- 5、等于: `eq@@flag|4`
- 6、不等于： `ne@@flag|4`
- 7、小于: `lt@@flag|4`
- 8、小于等于: `le@@flag|4`
- 9、包含: `like@@flag|4`
- 10、不包含: `notNike@@flag|4`
- 11、自定义表达式

## 2、匹配规则
- 1、常规匹配规则：`xxx@@yyy|zzz`，`xxx`为表达式类型，其中`yyy`为变量名，，最后的`zzz`为变量值。
<div><img src="https://foruda.gitee.com/images/1742270239857999165/4c5ce68d_2218307.png"></div>

- 2、默认表达式：`default@@${flag == 5 && flag > 4}`，其中`flag`为变量名。
<div><img src="https://foruda.gitee.com/images/1742270414653294800/a10fec4f_2218307.png"></div>

- 3、Spring Expression Language（SpEL）表达式: 
`spel@@#{@user.eval(#flag)}`表达式，`#flag`为变量和以下方法入参命名一致，可不设置入参。

<div><img src="https://foruda.gitee.com/images/1727163098727096928/c29d9af5_2218307.png"></div>

```java
@Component("user")
public class User {

    /**
     * spel条件表达：判断大于等4
     * @param flag 待判断的字符串
     * @return boolean
     */
    public boolean eval(String flag) {
        BigDecimal a = new BigDecimal(flag);
        BigDecimal b = new BigDecimal("4");
        return a.compareTo(b) > 0;
    }
}

/**
 * 新增OA 请假申请
 *
 * @param testLeave OA 请假申请
 * @return 结果
 */
@Override
public int insertTestLeave(TestLeave testLeave, String flowStatus)
{
    FlowParams flowParams = FlowParams.build().flowCode(getFlowType(testLeave));
    // 流程变量
    Map<String, Object> variable = new HashMap<>();
    variable.put("flag", String.valueOf(testLeave.getDay()));
    flowParams.variable(variable);

    Instance instance = insService.start(id, flowParams);
    return instance != null? 1 : 0;
}
```
