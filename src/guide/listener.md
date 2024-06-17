# 监听器

## 监听器类型
- create：创建监听器，任务创建时执行
- start：开始监听器，任务开始办理时执行
- permission：权限监听器，办理任务动态设置权限
- assignment： 分派办理人监听器，分派后执行
- finish：结束监听器，当前任务完成后执行

## 监听器生命周期图
![](..%2F.vuepress%2Fpublic%2FlistenerLife.png)

## 监听器使用
1、实现以下接口
```java
/**
 * 监听器接口
 */
public interface Listener extends Serializable {

    /** 开始监听器，当前任务开始前执行 */
    String LISTENER_START = "start";

    /** 结束监听器，当前任务完成后执行 */
    String LISTENER_END = "finish";

    /** 分派办理人监听器，分派后执行 */
    String LISTENER_ASSIGNMENT = "assignment";

    /** 权限监听器，办理任务动态设置权限 */
    String LISTENER_PERMISSION = "permission";

    void notify(ListenerVariable variable);
}

/**
 * 监听器实现类
 */
public class FinishListener implements Listener {
    private static final Logger log = LoggerFactory.getLogger(StartListener.class);

    @Override
    public void notify(ListenerVariable variable) {
        log.info("完成监听器:{}", variable);
        Instance instance = variable.getInstance();
        Map<String, Object> testLeaveMap = variable.getVariable();
        log.info("完成监听器结束;{}", "任务完成");
    }
}
```


2、页面配置监听器，传递后台通过`@@`分割不同监听器
监听器类型和监听器路径，上下一一对应

![](..%2F.vuepress%2Fpublic%2FlistenerUse.png)


3、实现权限监听器接口，然后在设计器中配置好监听器
```java
@Component
public class PermissionListener implements Listener {

    private static final Logger log = LoggerFactory.getLogger(PermissionListener.class);

    @Override
    public void notify(ListenerVariable variable) {
        log.info("权限监听器开始;{}", variable);
        Instance instance = variable.getInstance();
        List<NodePermission> nodePermissionList = new ArrayList<>();
        NodePermission nodePermission1 = new NodePermission();
        NodePermission nodePermission2 = new NodePermission();
        NodePermission nodePermission3 = new NodePermission();
        // 动态传入组件权限标识
        nodePermission1.setNodeCode("1");
        nodePermission1.setPermissionFlag("role:1,role:2,role:100");
        nodePermission2.setNodeCode("2");
        nodePermission2.setPermissionFlag("role:1,role:2,role:100");
        nodePermission3.setNodeCode("3");
        nodePermission3.setPermissionFlag("role:1,role:2,role:101");

        nodePermissionList.add(nodePermission1);
        nodePermissionList.add(nodePermission2);
        nodePermissionList.add(nodePermission3);
        variable.setNodePermissionList(nodePermissionList);
        Map<String, Object> variableMap = variable.getVariable();
        TestLeave testLeave = (TestLeave) variableMap.get("testLeave");
        log.info("权限监听器结束");
    }
}
```
## 监听器参数使用
`variable` 和 `params`的区别, `params`弃用, 目前没删`params`代码

![](..%2F.vuepress%2Fpublic%2FlistenerVariable.png)

一起debug看下代码的执行过程

![](..%2F.vuepress%2Fpublic%2FtestListener1.png)

**注意, 上述代码的监听器类型为权限监听器, 对其他监听器同样如此, 一通百通**

![](..%2F.vuepress%2Fpublic%2FdebugListener1.png)

主要关注图中圈出的两个红框

![](..%2F.vuepress%2Fpublic%2FdebugListener2.png)

上图细节点写在图上


![](..%2F.vuepress%2Fpublic%2FdebugListener3.png)

主要看这个图, 传入参数为我们在函数中指定的内容, 这里使用正则将路径和参数解析出来存入valueHloder中

![](..%2F.vuepress%2Fpublic%2FdebugListener4.png)

这里将valueHolder中的路径反射出来后, 在FrameInvoker中拿到该Listener类型的子类,这里拿到的是权限监听器, 同样我们可以看到variable中已经将key=WarmListenerParam存入进去, 恰巧就是在测试方法中传进去的参数, 继续F9往下执行

![](..%2F.vuepress%2Fpublic%2FdebugListener5.png)

到这里大家已经明白在监听器中可以拿到全局参数, 那实例参数如何获取呢？

---

![](..%2F.vuepress%2Fpublic%2FdebugListener6.png)

在这里我已经将实例参数放入到`variable`中, 同样的debug方式, 将debug放入到权限监听器开始的地方

![](..%2F.vuepress%2Fpublic%2FdebugListener7.png)

到这里相信大家已经明白实例参数和全局参数的获取方式

- 全局参数：指定`key`为`WarmListenerParam`
- 实例参数：业务系统传入的任何参数, 注意需要实现`Listener`接口, 如果业务系统在监听器中处理很多种不同情况, 建议做好流程模块开发, 防止“牵一发而动全身”