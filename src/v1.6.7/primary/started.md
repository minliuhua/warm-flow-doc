# 快速开始
::: tip
**在开始之前，我们假定您已经:**  

- 熟悉 Java 环境配置及其开发  
- 熟悉 关系型 数据库，比如 MySQL  
- 熟悉 Spring Boot或者Solon 及相关框架  
- 熟悉 Java 构建工具，比如 Maven  
:::

## 1、导入sql，按需求执行

- 开始学习前，请先了解[表结构](./table.md)，不迷路
- 首次导入，先创建数据库，找到对应数据库的全量脚本[warm-flow-all.sql](https://gitee.com/dromara/warm-flow/tree/master/sql/mysql)，执行  
- 如果版本更新，找到对应数据库的更新版本，比如xx-upgrade，[warm-flow_x.x.x.sql](https://gitee.com/dromara/warm-flow/tree/master/sql/mysql/v1-upgrade)，执行

<table>
    <tbody>
        <tr>
            <td><img src="https://foruda.gitee.com/images/1724349579810152906/15af22df_2218307.png" width="500px" height="180px"/></td>
            <td><img src="https://foruda.gitee.com/images/1724349629546024487/f32625d9_2218307.png" width="500px" height="180px"/></td>
        </tr>
    </tbody>
</table>


## 2、官网流程定义案例xml

[官网流程定义案例xml](https://gitee.com/dromara/warm-flow-test/tree/master/warm-flow-core-test/src/main/resources)


## 3、maven依赖
### 3.1、从首页获取最新版本
<br>

<img src="https://foruda.gitee.com/images/1737083916006381044/743f5bfb_2218307.png" width="500px">
<br>

### 3.2、mybatis

::: code-tabs#shell

@tab:active springboot2

```xml
<dependency>
    <groupId>org.dromara.warm</groupId>
    <artifactId>warm-flow-mybatis-sb-starter</artifactId>
    <version>最新版本</version>
</dependency>
```

@tab springboot3

```xml
<dependency>
    <groupId>org.dromara.warm</groupId>
    <artifactId>warm-flow-mybatis-sb3-starter</artifactId>
    <version>最新版本</version>
</dependency>
```

@tab solon

```xml
<dependency>
    <groupId>org.dromara.warm</groupId>
    <artifactId>warm-flow-mybatis-solon-plugin</artifactId>
    <version>最新版本</version>
</dependency>
```

:::


### 3.3、mybatis-plus

::: code-tabs#shell

@tab:active springboot2

```xml
<dependency>
    <groupId>org.dromara.warm</groupId>
    <artifactId>warm-flow-mybatis-plus-sb-starter</artifactId>
    <version>最新版本</version>
</dependency>
```

@tab springboot3

```xml
<dependency>
    <groupId>org.dromara.warm</groupId>
    <artifactId>warm-flow-mybatis-plus-sb3-starter</artifactId>
    <version>最新版本</version>
</dependency>
```

@tab solon

```xml
<dependency>
    <groupId>org.dromara.warm</groupId>
    <artifactId>warm-flow-mybatis-plus-solon-plugin</artifactId>
    <version>最新版本</version>
</dependency>
```

:::


### 3.4、jpa

[https://gitee.com/warm_4/warm-flow-jpa.git](https://gitee.com/warm_4/warm-flow-jpa.git)


### 3.5、mybatis-flex

[https://gitee.com/rigangxia/warm-flow-mybatis-flex.git](https://gitee.com/rigangxia/warm-flow-mybatis-flex.git)



### 3.6、easy-query

[https://gitee.com/link2fun/warm-flow-easy-query.git](https://gitee.com/link2fun/warm-flow-easy-query.git)



> **有想扩展其他orm框架和数据库的可加qq群联系群主**

## 4、代码示例

> 详细案例测试代码[warm-flow-test](https://gitee.com/dromara/warm-flow-test)项目中，warm-flow-xxx-test模块的测类

**以下为简短案例：**

::: code-tabs#shell

@tab:active 部署流程

```java
public void deployFlow() throws Exception {
    String path = "/Users/minliuhua/Desktop/mdata/file/IdeaProjects/min/hh-vue/hh-admin/src/main/resources/leaveFlow-serial.xml";
    System.out.println("已部署流程的id：" + defService.importIs(new FileInputStream(path)).getId());
}
```

@tab 发布流程

```java
public void publish() throws Exception {
    defService.publish(1212437969554771968L);
}
```

@tab 开启流程

```java
public void startFlow() {
    System.out.println("已开启的流程实例id：" + insService.start("1", getUser()).getId());
}
```

@tab 流程流转

```java
public void skipFlow() throws Exception {
    // 通过实例id流转
    Instance instance = insService.skipByInsId(1219286332141080576L, getUser().skipType(SkipType.PASS.getKey())
            .permissionFlag(Arrays.asList("role:1", "role:2")));
    System.out.println("流转后流程实例：" + instance.toString());

//        // 通过任务id流转
//        Instance instance = insService.skip(1219286332145274880L, getUser().skipType(SkipType.PASS.getKey())
//                .permissionFlag(Arrays.asList("role:1", "role:2")));
//        System.out.println("流转后流程实例：" + instance.toString());
}

public void skipAnyNode() throws Exception {
    // 跳转到指定节点
    Instance instance = insService.skip(1219286332145274880L, getUser().skipType(SkipType.PASS.getKey())
            .permissionFlag(Arrays.asList("role:1", "role:2")).nodeCode("4"));
    System.out.println("流转后流程实例：" + instance.toString());
}
```

:::

## 5、设计器引入
> 通过jar包引入：[文档地址](./designerIntroduced.md)

## 6、初学者推荐学习路线

### 6.1、推荐集成案例hh-vue
[项目地址](../introduction/projectexample.md)

### 6.2、推荐学习视频
<BiliBili bvid="BV1Ci42117pK" />
