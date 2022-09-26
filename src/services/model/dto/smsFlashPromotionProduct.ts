import { PmsProduct } from "../model/pmsProduct";
import { SmsFlashPromotionProductRelation } from "../model/smsFlashPromotionProductRelation";

/**
 * 限时购商品信息封装
 * Created by macro on 2018/11/16.
 */
export interface SmsFlashPromotionProduct extends SmsFlashPromotionProductRelation {
  /** 关联商品 */
  product: PmsProduct;
}
