/**
 * 添加更新产品分类的参数
 * Created by macro on 2018/4/26.
 */
export interface PmsProductCategoryParam {
  /** 父分类的编号 */
  parentId: number;
  /** 商品分类名称 */
  name: string;
  /** 分类单位 */
  productUnit: string;
  /** 是否在导航栏显示 */
  navStatus: number;
  /** 是否进行显示 */
  showStatus: number;
  /** 排序 */
  sort: number;
  /** 图标 */
  icon: string;
  /** 关键字 */
  keywords: string;
  /** 描述 */
  description: string;
  /** 产品相关筛选属性集合 */
  productAttributeIdList: Array<number>;
}
