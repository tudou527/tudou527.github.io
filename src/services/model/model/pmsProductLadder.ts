/** */
export interface PmsProductLadder {
  /** */
  id: number;
  /** */
  productId: number;
  /** 满足的商品数量 */
  count: number;
  /** 折扣 */
  discount: number;
  /** 折后价格 */
  price: number;
}
