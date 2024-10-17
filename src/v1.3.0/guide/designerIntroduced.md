# 设计器引入
> [!IMPORTANT]
> 1、为了方便业务系统快速引入设计器，不需要搬运并且适配等工作
> 2、可以按照本文中介绍的，使用设计器，并快速接入业务系统
> 3、设计原理采取不分离的方式，把设计器打包的jar包中,以接口和静态资源的方式引入

## 1. 引入依赖

```xml
<dependency>
    <groupId>io.github.minliuhua</groupId>
    <artifactId>warm-flow-plugin-ui-sb-web</artifactId>
    <version>版本号</version>
</dependency>
```

## 2. 后端放行部分路径
> 这两个路径需要放行，否则无法访问，`/warm-flow-ui/**`, `/warm-flow/**`

### 2.1 spring-security 放行配置  
<br>

```java
@Bean
protected SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception
{
    return httpSecurity
            .......
            // 注解标记允许匿名访问的url
            .authorizeHttpRequests((requests) -> {
                // 后端请求，静态资源，可匿名访问
                requests.antMatchers("/warm-flow-ui/**", "/warm-flow/**").permitAll()
                        // 除上面外的所有请求全部需要鉴权认证
                        .anyRequest().authenticated();
            })
            ......
            .build();
}
```
<br>

### 2.2 shiro 放行配置
<br>

```java
@Configuration
public class ShiroConfig {

    /**
     * Shiro过滤器配置
     */
    @Bean
    public ShiroFilterFactoryBean shiroFilterFactoryBean(SecurityManager securityManager) {
        CustomShiroFilterFactoryBean shiroFilterFactoryBean = new CustomShiroFilterFactoryBean();
        ......
        // 后端请求，静态资源，可匿名访问
        LinkedHashMap<String, String> filterChainDefinitionMap = new LinkedHashMap<>();
        filterChainDefinitionMap.put("/warm-flow-ui/**", "anon");
        filterChainDefinitionMap.put("/warm-flow/**", "anon");

        shiroFilterFactoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap);
        return shiroFilterFactoryBean;
    }
}
```
<br>

## 3. 前端加载设计器

### 3.1 vue2 引入
- 前后端分离项目需要把访问路径代理到后端，后者直接访问后端接口，但是需要处理跨域问题
- 代理到后端需要vue.config.js配置代码, 部署到nginx中同样需要配置代理

```javascript
"/warm-flow-ui": {
  target: `http://localhost:8080/warm-flow-ui`,
  changeOrigin: true,
  pathRewrite: {
    '/warm-flow-ui': '/'
  }
},

```

<br>

- 首先传入设计器需要的流程定义definitionId和是否可编辑disabled参数
- 本实例采用iframe方式嵌入设计器
<br>

```vue

<template>
  <div :style="'height:' + height">
    <iframe :src="url" style="width: 100%; height: 100%"/>
  </div>
</template>
<script>

  export default {
    name: "WarmFlow",
    data() {
      return {
        height: document.documentElement.clientHeight - 94.5 + "px;",
        url: ""
      };
    },
    mounted() {
      // definitionId为需要查询的流程定义id，
      // disabled为是否可编辑, 例如：查看的时候不可编辑，不可保存
      this.url = `/warm-flow-ui/warm-flow/${definitionId}?disabled=${disabled}`;
      this.iframeLoaded();
    },
    methods: {
      // iframe监听组件内设计器保存事件
      iframeLoaded() {
        window.onmessage = (event) => {
          console.log(event);
          switch (event.data.method) {
            case "close":
              this.close();
              break;
          }
        }
      },
      close() {
        const obj = {path: "/flow/definition"};
        this.$tab.closeOpenPage(obj);
      }
    }
  };
</script>
```
<br>

### 3.2 vue3 引入
- vue3项目引入注意事项同以上vue2

```javascript
'/warm-flow-ui': {
  target: 'http://localhost:8080/warm-flow-ui',
  changeOrigin: true,
  pathRewrite: {
    rewrite: (p) => p.replace(/^\/warm-flow-ui/, '')
  }
},
```
<br>

```vue
<template>
  <div class="container" ref="container">
    <iframe ref="iframe" :src="iframeUrl" frameborder="0" width="100%" height="100%"></iframe>
  </div>
</template>

<script setup name="WarmFlow">
const { proxy } = getCurrentInstance();
import { onMounted } from 'vue';

// definitionId为需要查询的流程定义id，
// disabled为是否可编辑, 例如：查看的时候不可编辑，不可保存
const iframeUrl = ref(`/warm-flow-ui/warm-flow/${definitionId}?disabled=${disabled}`);

const iframeLoaded = () => {
  // iframe监听组件内设计器保存事件
  window.onmessage = (event) => {
    switch (event.data.method) {
      case "close":
        close();
        break;
    }
  }
};

/** 关闭按钮 */
function close() {
  const obj = { path: "/flow/definition" };
  proxy.$tab.closeOpenPage(obj);
}

onMounted(() => {
  iframeLoaded();
});
</script>

<style scoped>
.container {
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

```

### 3.3 前后端不分离版本
- 前后端不分离项目，前后端端口一致，不需要代理（以下代码再ruoyi不分离版中测试）

- 可以直接访问后端接口加载页面，如：`/warm-flow/1839683148936663047?disabled=false`
<br>
```java
@Controller
@RequestMapping("/warm-flow")
public class WarmFlowController
{
    @GetMapping()
    public String index(String definitionId, Boolean disabled)
    {
        return redirect("/warm-flow-ui/warm-flow/" + definitionId + "?disabled=" + disabled);
    }
}
```
<br>

- 或者前端直接访问后端接口，如：`/warm-flow/1839683148936663047?disabled=false`
<br>
```javascript
/*打开新的页签，加载设计器*/
function detail(dictId) {
    var url = prefix + '/detail/' + dictId;
    $.modal.openTab("字典数据", "/warm-flow-ui/warm-flow/1839683148936663047?disabled=false&pageNum=1");
}

```
<br>

## 4. 实现HandlerSelectService接口
> 给任务节点设置哪些权限的人可以办理，实现此接口提供个设计器

<img src="https://foruda.gitee.com/images/1729094468685997422/d38c7e79_2218307.png">

<br>

```java
/**
 * 流程设计器-获取办理人权限设置列表接口
 *
 * @author warm
 */
public interface HandlerSelectService {

    /**
     * 获取办理人权限设置列表tabs页签, 如：用户、角色和部门等
     * @return tabs页签
     */
    List<String> getHandlerType();

    /**
     * 获取办理人权限设置列表结果，如：用户列表、角色列表、部门列表等
     * @param query 查询参数
     * @return 结果
     */
    List<HandlerSelectVo> getHandlerSelect(HandlerQuery query);
}

```

```java
@Component
public class HandlerSelectServiceImpl implements HandlerSelectService {

    /**
     * 获取办理人权限设置列表tabs页签，如：用户、角色和部门等，可以返回其中一种或者多种，按业务需求决定
     * @return
     */
    @Override
    public List<String> getHandlerType() {
        return Arrays.asList("用户", "角色", "部门");
    }

    /**
     * 获取用户列表、角色列表、部门列表等，可以返回其中一种或者多种，按业务需求决定
     * @param query
     * @return
     */
    @Override
    public List<HandlerSelectVo> getHandlerSelect(HandlerQuery query) {
        List<HandlerSelectVo> handlerSelectVos = new ArrayList<>();

        // 获取用户列表
        if ("用户".equals(query.getHandlerType())) {
            HandlerSelectVo handlerSelectVo = getUser(query);
            handlerSelectVos.add(handlerSelectVo);
        }

        // 获取角色列表
        if ("角色".equals(query.getHandlerType())) {
            HandlerSelectVo handlerSelectVo = getRole(query);
            handlerSelectVos.add(handlerSelectVo);
        }

        // 获取部门列表
        if ("部门".equals(query.getHandlerType())) {
            HandlerSelectVo handlerSelectVo = getDept(query);
            handlerSelectVos.add(handlerSelectVo);
        }

        return handlerSelectVos;
    }
}
```
