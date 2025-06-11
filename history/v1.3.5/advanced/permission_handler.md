# 办理人权限处理器
> [!IMPORTANT]
> 1、审批前通常需要获取当前办理人所拥有的权限，如角色和部门等，办理时会校验的该权限是否是可审批人员
> 2、工作流api中很多需要获取当前办理人id，进行保存或者校验
> 3、以上业务代码中会出现很多重复代码，为此抽取出这个接口

## 1、PermissionHandler接口

```java
/**
 * 办理人权限处理器
 *
 * @author shadow
 */
public interface PermissionHandler {

    /**
     * 审批前获取当前办理人，办理时会校验的该权限集合
     * 后续在{@link FlowParams#getPermissionFlag}  中获取
     * 返回当前用户权限集合
     *
     */
    List<String> permissions();

    /**
     * 获取当前办理人
     * @return 当前办理人
     */
    String getHandler();

}
```

## 2、编写PermissionHandler实现类

```java
/**
 * 办理人权限处理器（可通过配置文件注入，也可用@Bean/@Component方式）
 *
 * @author shadow
 */
@Component
public class CustomPermissionHandler implements PermissionHandler {

    /**
     * 获取当前操作用户所有权限
     */
    @Override
    public List<String> permissions() {
        // 办理人权限标识，比如用户，角色，部门等, 流程设计时未设置办理人或者ignore为true可不传 [按需传输]
        SysUser sysUser = SecurityUtils.getLoginUser().getUser();
        List<SysRole> roles = sysUser.getRoles();
        List<String> permissionList = StreamUtils.toList(roles, role -> "role:" + role.getRoleId());
        if (sysUser.getUserId() != null) {
            permissionList.add(String.valueOf(sysUser.getUserId()));
        }
        if (sysUser.getDeptId() != null) {
            permissionList.add("dept:" + sysUser.getDeptId());
        }
        return permissionList;
    }

    /**
     * 获取当前办理人
     * @return 当前办理人
     */
    @Override
    public String getHandler() {
        SysUser sysUser = SecurityUtils.getLoginUser().getUser();
        if (sysUser.getUserId() != null) {
            return String.valueOf(sysUser.getUserId());
        }
        return null;
    }
}

```
