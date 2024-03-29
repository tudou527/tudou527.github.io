// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
/**
 * 生成订单时传入的参数
 * Created by macro on 2018/8/30.
 */
export interface OrderParam {
  /** 收货地址ID */
  memberReceiveAddressId: number;
  /** 优惠券ID */
  couponId: number;
  /** 使用的积分数 */
  useIntegration: number;
  /** 支付方式 */
  payType: number;
  /** 被选中的购物车商品ID */
  cartIds: Array<number>;
}
