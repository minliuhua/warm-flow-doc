# 快速开始

> [!IMPORTANT] 
> **在开始之前，我们假定您已经:**
> 
> 熟悉 Java 环境配置及其开发
> 熟悉 关系型 数据库，比如 MySQL
> 熟悉 Spring Boot或者Solon 及相关框架
> 熟悉 Java 构建工具，比如 Maven

## 导入sql，按需求执行
```shell
如果第一次导入，请先创建数据库，找到组件中的sql目录，找到对应数据库的全量脚本warm-flow-all.sql，执行  
如果版本更新，找到对应数据库的更新版本，比如xx-upgrade，warm-flow_x.x.x.sql，执行
```




## maven依赖
### 1、mybatis
**springboot项目**

```maven
<dependency>
      <groupId>io.github.minliuhua</groupId>
      <artifactId>warm-flow-mybatis-sb-starter</artifactId>
      <version>最新版本</version>
</dependency>
```

**solon项目**

```maven
<dependency>
      <groupId>io.github.minliuhua</groupId>
      <artifactId>warm-flow-mybatis-solon-plugin</artifactId>
      <version>最新版本</version>
</dependency>
```

### 2、mybatis-plus
**springboot项目**

```maven
<dependency>
      <groupId>io.github.minliuhua</groupId>
      <artifactId>warm-flow-mybatis-plus-sb-starter</artifactId>
      <version>springboot，mybatis-plus扩展包，最新版本</version>
</dependency>
```

**solon项目**

```maven
<dependency>
      <groupId>io.github.minliuhua</groupId>
      <artifactId>warm-flow-mybatis-plus-solon-plugin</artifactId>
      <version>solon，mybatis-plus扩展包，最新版本</version>
</dependency>
```

### 3、jpa
**springboot项目**

```maven
<dependency>
      <groupId>io.github.minliuhua</groupId>
      <artifactId>warm-flow-jpa-sb-starter</artifactId>
      <version>springboot2.x, 最新版本</version>
</dependency>

<dependency>
      <groupId>io.github.minliuhua</groupId>
      <artifactId>warm-flow-jpa-jakarta-sb-starter</artifactId>
      <version>springboot3.x, 最新版本</version>
</dependency>
```

**solon项目**

```maven
暂不支持
```

## 支持数据库类型

* [x] mysql
* [x] oracle
* [ ] sqlserver
* [ ] ......


## 支持orm框架类型

* [x] mybatis
* [x] mybatis-plus
* [x] jpa
* [ ] mybatis-flex
* [ ] ......




> **有想扩展其他orm框架和数据库的可加qq群联系群主**

## 代码示例

warm-flow中warm-flow-test目录下，warm-flow-xxx-test模块的测类


### 部署流程

```java
public void deployFlow() throws Exception {
        String path = "/Users/minliuhua/Desktop/mdata/file/IdeaProjects/min/hh-vue/hh-admin/src/main/resources/leaveFlow-serial.xml";
        System.out.println("已部署流程的id：" + defService.importXml(new FileInputStream(path)).getId());
    }
```

### 发布流程

```java
public void publish() throws Exception {
        defService.publish(1212437969554771968L);
    }
```

### 开启流程

```java
public void startFlow() {
        System.out.println("已开启的流程实例id：" + insService.start("1", getUser()).getId());
    }
```

### 流程流转

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
