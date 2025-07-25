# 功能演示
**以下演示基于项目示例hh-vue**
> [!IMPORTANT]
> 以下演示基于项目示例hh-vue

## 演示地址

::: warning
- admin/admin123

演示地址：http://www.hhzai.top
:::

## 演示图

<div class="yat"><img src="https://foruda.gitee.com/images/1697704379975758657/558474f6_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703576997421577844/a1dc2737_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703577051212751284/203a05b0_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703577120823449150/ba952a84_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703577416508497463/863d8da1_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703641952765512992/dc187080_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703639870569018221/453a0e0e_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703639949778635820/34a6c14e_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703640045465410604/c14affda_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703641581976369452/e4629da5_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703640080823852176/bdf9a360_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703640099939146504/b19b2b85_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703641659022331552/cc4e0af2_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703641675840058630/3430da37_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703641687716655707/62a8b20c_2218307.png"/></div>
<div class="yat"><img src="https://foruda.gitee.com/images/1703641702939748288/6da6c4f6_2218307.png"/></div>
<div class="yat"><img src="/demo4.png"/></div>
<div class="yat"><img src="/demo2.png"/></div>
<div class="yat"><img src="/demo3.png"/></div>
<div class="yat"><img src="/demo1.png"/></div>




## 1、新增定义
::: tip
流程编码和流程版本：确定唯一
审批表单路径：记录待办任务需要显示的待办信息页面，点击待办时候获取这个路径，动态加载这个页面
:::


![输入图片说明](https://foruda.gitee.com/images/1703667450784737720/940b2bab_2218307.png "屏幕截图")

## 2、流程设计
### 2、1节点设置
::: tip 
配置节点名称，协作方式（会签、票签和或签），节点权限，是否任意调整，监听器等
:::


<img src="https://foruda.gitee.com/images/1734589294761157636/ac74e327_2218307.png" width="700" />
<img src="https://foruda.gitee.com/images/1732545153700629064/3183155f_2218307.png" width="700" />

### 2、2跳转线设置
::: tip 
配置跳转名称，跳转类型（通过还是退回）,**退回不能选择通过类型**，调整条件
:::


![](/defSkip.png)
![](https://foruda.gitee.com/images/1726905626290177483/195615fc_2218307.png)
## 3、开启流程实例
::: tip
hh-vue项目已经准备了七套流程，以及开启流程代码，开启流程会直接执行到开始节点后一个节点
:::

![](/addIns.png)


## 4、提交流程
::: tip
提交流程后，流程流转到代表任务，由流程设计中的对应权限人去办理
:::


![输入图片说明](https://foruda.gitee.com/images/1703668493778770778/d77716b5_2218307.png "屏幕截图")


## 5、办理流程
::: tip
如果是互斥网关则会判断是否满足条件
:::


![输入图片说明](https://foruda.gitee.com/images/1703668882786849328/0b9554ec_2218307.png "屏幕截图")
![输入图片说明](https://foruda.gitee.com/images/1703668896500858952/c9dc78e1_2218307.png "屏幕截图")

## 6、驳回流程

![输入图片说明](https://foruda.gitee.com/images/1703669345903195445/4ba131bc_2218307.png "屏幕截图")
