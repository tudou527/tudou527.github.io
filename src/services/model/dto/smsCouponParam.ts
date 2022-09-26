import { SmsCouponProductRelation } from "../model/smsCouponProductRelation";
import { SmsCouponProductCategoryRelation } from "../model/smsCouponProductCategoryRelation";
import { SmsCoupon } from "../model/smsCoupon";

/**
 * 优惠券信息封装，包括绑定商品和分类
 * Created by macro on 2018/8/28.
 */
export interface SmsCouponParam extends SmsCoupon {
  /** 优惠券绑定的商品 */
  productRelationList: Array<SmsCouponProductRelation>;
  /** 优惠券绑定的商品分类 */
  productCategoryRelationList: Array<SmsCouponProductCategoryRelation>;
}
