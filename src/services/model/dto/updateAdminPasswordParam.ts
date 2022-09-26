/**
 * 修改用户名密码参数
 * Created by macro on 2019/10/9.
 */
export interface UpdateAdminPasswordParam {
  /** 用户名 */
  username: string;
  /** 旧密码 */
  oldPassword: string;
  /** 新密码 */
  newPassword: string;
}
