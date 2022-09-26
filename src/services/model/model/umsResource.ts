/** */
export interface UmsResource {
  /** */
  id: number;
  /** 创建时间 */
  createTime: Date;
  /** 资源名称 */
  name: string;
  /** 资源URL */
  url: string;
  /** 描述 */
  description: string;
  /** 资源分类ID */
  categoryId: number;
}
