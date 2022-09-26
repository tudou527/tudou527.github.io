import { CartPromotionItem } from "./cartPromotionItem";
import { UmsMemberReceiveAddress } from "../model/umsMemberReceiveAddress";
import { SmsCouponHistoryDetail } from "./smsCouponHistoryDetail";
import { UmsIntegrationConsumeSetting } from "../model/umsIntegrationConsumeSetting";

/**
 * 确认单信息封装
 * Created by macro on 2018/8/30.
 */
export interface ConfirmOrderResult {
  /** 包含优惠信息的购物车信息 */
  cartPromotionItemList: Array<CartPromotionItem>;
  /** 用户收货地址列表 */
  memberReceiveAddressList: Array<UmsMemberReceiveAddress>;
  /** 用户可用优惠券列表 */
  couponHistoryDetailList: Array<SmsCouponHistoryDetail>;
  /** 积分使用规则 */
  integrationConsumeSetting: UmsIntegrationConsumeSetting;
  /** 会员持有的积分 */
  memberIntegration: number;
  /** 计算的金额 */
  calcAmount: ConfirmOrderResultCalcAmount;
}

/** */
export interface ConfirmOrderResultCalcAmount {
  /** 订单商品总金额 */
  totalAmount: number;
  /** 运费 */
  freightAmount: number;
  /** 活动优惠 */
  promotionAmount: number;
  /** 应付金额 */
  payAmount: number;
}
