import { PmsProduct } from "../model/pmsProduct";

/**
 * 秒杀信息和商品对象封装
 * Created by macro on 2019/1/28.
 */
export interface FlashPromotionProduct extends PmsProduct {
  /** 秒杀价格 */
  flashPromotionPrice: number;
  /** 用于秒杀到数量 */
  flashPromotionCount: number;
  /** 秒杀限购数量 */
  flashPromotionLimit: number;
}
