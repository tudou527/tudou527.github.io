import { FlashPromotionProduct } from "./flashPromotionProduct";

/**
 * 首页秒杀场次信息封装
 * Created by macro on 2019/1/28.
 */
export interface HomeFlashPromotion {
  /** 本场开始时间 */
  startTime: Date;
  /** 本场结束时间 */
  endTime: Date;
  /** 下场开始时间 */
  nextStartTime: Date;
  /** 下场结束时间 */
  nextEndTime: Date;
  /** 属于该秒杀活动的商品 */
  productList: Array<FlashPromotionProduct>;
}
