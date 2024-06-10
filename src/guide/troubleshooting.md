# 常见问题

1、此项目目前使用的是雪花算法生成id，可能导致前端页面获取丢失精度（感谢【luoheyu】提供测试意见）    
按照这个把long序列化成字符串，前端页面就不会丢失精度了，获取查看hh-vue项目如何处理
http://doc.ruoyi.vip/ruoyi/other/faq.html#%E5%A6%82%E4%BD%95%E5%A4%84%E7%90%86long%E7%B1%BB%E5%9E%8B%E7%B2%BE%E5%BA%A6%E4%B8%A2%E5%A4%B1%E9%97%AE%E9%A2%98

2、生成的流程图中文乱码
由于服务器上缺少中文字体，通过检查fc-list :lang=zh是否包含中文字符集（以下是存在的示例）
```shell
[root@iZbp18ilgi6s1lkbmmfo2jZ zhFonts]# fc-list :lang=zh
/usr/share/fonts/zhFonts/SIMSUN.TTC: 新宋体,NSimSun:style=常规,Regular
/usr/share/fonts/zhFonts/SIMSUN.TTC: 宋体,SimSun:style=常规,Regular
```
[zhFonts.zip](https://gitee.com/warm_4/warm-flow-doc/blob/dev/file/zhFonts.zip)将文件解压至 /usr/share/fonts 目录下
```shell
[root@iZbp18ilgi6s1lkbmmfo2jZ fonts]# ll
总用量 8
drwxr-xr-x 2 root root 4096 5月  17 00:20 dejavu
drwxr-xr-x 2 root root 4096 5月  17 11:40 zhFonts
```
重启服务

3、spring开启懒加载后，导致FlowAutoConfig.initFlow()未加载。（由社区【^星^ Q】提供）  
删除"lazy-initialization: true",可解决问题，以下是错误示例

```yml
spring:
  main:
    allow-bean-definition-overriding: true
    lazy-initialization: true
    web-application-type: servlet
``` 

4、出现类型转换异常，检查是否使用热部署插件，比如spring.devtools，可以把插件关了，或者加上排除配置spring-devtools.properties
```properties
restart.include.flow=/io.github.minliuhua.*.jar
```
