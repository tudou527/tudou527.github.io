import { OmsCartItem } from "../model/omsCartItem";

/**
 * 购物车中促销信息的封装
 * Created by macro on 2018/8/27.
 */
export interface CartPromotionItem extends OmsCartItem {
  /** 促销活动信息 */
  promotionMessage: string;
  /** 促销活动减去的金额，针对每个商品 */
  reduceAmount: number;
  /** 剩余库存-锁定库存 */
  realStock: number;
  /** 购买商品赠送积分 */
  integration: number;
  /** 购买商品赠送成长值 */
  growth: number;
}
