import { SmsCoupon } from "../model/smsCoupon";
import { SmsCouponProductRelation } from "../model/smsCouponProductRelation";
import { SmsCouponProductCategoryRelation } from "../model/smsCouponProductCategoryRelation";
import { SmsCouponHistory } from "../model/smsCouponHistory";

/**
 * 优惠券领取历史详情（包括优惠券信息和关联关系）
 * Created by macro on 2018/8/29.
 */
export interface SmsCouponHistoryDetail extends SmsCouponHistory {
  /** 相关优惠券信息 */
  coupon: SmsCoupon;
  /** 优惠券关联商品 */
  productRelationList: Array<SmsCouponProductRelation>;
  /** 优惠券关联商品分类 */
  categoryRelationList: Array<SmsCouponProductCategoryRelation>;
}
