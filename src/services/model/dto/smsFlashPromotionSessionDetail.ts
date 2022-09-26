import { SmsFlashPromotionSession } from "../model/smsFlashPromotionSession";

/**
 * 包含商品数量的场次信息
 * Created by macro on 2018/11/19.
 */
export interface SmsFlashPromotionSessionDetail extends SmsFlashPromotionSession {
  /** 商品数量 */
  productCount: number;
}
