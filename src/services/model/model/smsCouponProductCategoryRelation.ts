/** */
export interface SmsCouponProductCategoryRelation {
  /** */
  id: number;
  /** */
  couponId: number;
  /** */
  productCategoryId: number;
  /** 产品分类名称 */
  productCategoryName: string;
  /** 父分类名称 */
  parentCategoryName: string;
}
