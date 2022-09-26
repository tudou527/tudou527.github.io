/** */
export interface PmsProductCategory {
  /** */
  id: number;
  /** 上机分类的编号：0表示一级分类 */
  parentId: number;
  /** */
  name: string;
  /** 分类级别：0->1级；1->2级 */
  level: number;
  /** */
  productCount: number;
  /** */
  productUnit: string;
  /** 是否显示在导航栏：0->不显示；1->显示 */
  navStatus: number;
  /** 显示状态：0->不显示；1->显示 */
  showStatus: number;
  /** */
  sort: number;
  /** 图标 */
  icon: string;
  /** */
  keywords: string;
  /** 描述 */
  description: string;
}
