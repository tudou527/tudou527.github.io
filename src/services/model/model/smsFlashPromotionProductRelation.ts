/** */
export interface SmsFlashPromotionProductRelation {
  /** 编号 */
  id: number;
  /** */
  flashPromotionId: number;
  /** 编号 */
  flashPromotionSessionId: number;
  /** */
  productId: number;
  /** 限时购价格 */
  flashPromotionPrice: number;
  /** 限时购数量 */
  flashPromotionCount: number;
  /** 每人限购数量 */
  flashPromotionLimit: number;
  /** 排序 */
  sort: number;
}
