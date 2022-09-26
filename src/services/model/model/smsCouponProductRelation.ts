/** */
export interface SmsCouponProductRelation {
  /** */
  id: number;
  /** */
  couponId: number;
  /** */
  productId: number;
  /** 商品名称 */
  productName: string;
  /** 商品编码 */
  productSn: string;
}
