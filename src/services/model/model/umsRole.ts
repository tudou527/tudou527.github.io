/** */
export interface UmsRole {
  /** */
  id: number;
  /** 名称 */
  name: string;
  /** 描述 */
  description: string;
  /** 后台用户数量 */
  adminCount: number;
  /** 创建时间 */
  createTime: Date;
  /** 启用状态：0->禁用；1->启用 */
  status: number;
  /** */
  sort: number;
}
