/** */
export interface UmsAdmin {
  /** */
  id: number;
  /** */
  username: string;
  /** */
  password: string;
  /** 头像 */
  icon: string;
  /** 邮箱 */
  email: string;
  /** 昵称 */
  nickName: string;
  /** 备注信息 */
  note: string;
  /** 创建时间 */
  createTime: Date;
  /** 最后登录时间 */
  loginTime: Date;
  /** 帐号启用状态：0->禁用；1->启用 */
  status: number;
}
