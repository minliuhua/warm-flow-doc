# json库切换和扩展

> [!IMPORTANT]
> 目前支持Snack3、Jackson、fastjson和Gson三种json库，默认使用snack3

## json库切换
- 切换json库只需要在pom.xml中排除原来的json库，引入新的即可, 默认使用snack3，需要切换为jackson

### 切换为Jackson
```pom.xml
<dependency>
    <groupId>io.github.minliuhua</groupId>
    <artifactId>warm-flow-mybatis-sb-starter</artifactId>
    <exclusions>
        <exclusion>
            <artifactId>warm-flow-plugin-snack</artifactId>
            <groupId>io.github.minliuhua</groupId>
        </exclusion>
    </exclusions>
</dependency>

<dependency>
    <groupId>io.github.minliuhua</groupId>
    <artifactId>warm-flow-plugin-jackson</artifactId>
</dependency>
```

### 切换为fastjson
```pom.xml
<dependency>
    <groupId>io.github.minliuhua</groupId>
    <artifactId>warm-flow-mybatis-plus-sb-starter</artifactId>
    <exclusions>
        <exclusion>
            <artifactId>warm-flow-plugin-snack</artifactId>
            <groupId>io.github.minliuhua</groupId>
        </exclusion>
    </exclusions>
</dependency>

<dependency>
    <groupId>io.github.minliuhua</groupId>
    <artifactId>warm-flow-plugin-fastjson</artifactId>
</dependency>
```

### 切换为Gson
```pom.xml
<dependency>
    <groupId>io.github.minliuhua</groupId>
    <artifactId>warm-flow-mybatis-plus-sb-starter</artifactId>
    <exclusions>
        <exclusion>
            <artifactId>warm-flow-plugin-snack</artifactId>
            <groupId>io.github.minliuhua</groupId>
        </exclusion>
    </exclusions>
</dependency>

<dependency>
    <groupId>io.github.minliuhua</groupId>
    <artifactId>warm-flow-plugin-gson</artifactId>
</dependency>
```

## json库扩展
- 扩展json库需要实现`JsonConvert`接口，并实现`strToMap`和`mapToStr`方法
- 并通过spi机制加载，可参照`warm-flow-plugin-jackson`和`warm-flow-plugin-snack`模块

```java
public class JsonConvertJackson implements JsonConvert {

    private static final Logger log = LoggerFactory.getLogger(JsonConvertJackson.class);

    /**
     * 将字符串转为map
     * @param jsonStr json字符串
     * @return map
     */
    @Override
    public Map<String, Object> strToMap(String jsonStr) {
        if (StringUtils.isNotEmpty(jsonStr)) {
            ObjectMapper objectMapper = new ObjectMapper();
            try {
                return objectMapper.readValue(jsonStr, TypeFactory.defaultInstance().constructMapType(Map.class, String.class, Object.class));
            } catch (IOException e) {
                log.error("json转换异常", e);
                throw new FlowException("json转换异常");
            }
        }
        return new HashMap<>();
    }

    /**
     * 将map转为字符串
     * @param variable map
     * @return json字符串
     */
    @Override
    public String mapToStr(Map<String, Object> variable) {
        if (MapUtil.isNotEmpty(variable)) {
            // 创建 ObjectMapper 实例
            ObjectMapper objectMapper = new ObjectMapper();
            try {
                return objectMapper.writeValueAsString(variable);
            } catch (Exception e) {
                log.error("Map转换异常", e);
                throw new FlowException("Map转换异常");
            }
        }
        return null;
    }

}
```