/** */
export interface UmsMenu {
  /** */
  id: number;
  /** 父级ID */
  parentId: number;
  /** 创建时间 */
  createTime: Date;
  /** 菜单名称 */
  title: string;
  /** 菜单级数 */
  level: number;
  /** 菜单排序 */
  sort: number;
  /** 前端名称 */
  name: string;
  /** 前端图标 */
  icon: string;
  /** 前端隐藏 */
  hidden: number;
}
