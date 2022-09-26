/**
 * 订单发货参数
 * Created by macro on 2018/10/12.
 */
export interface OmsOrderDeliveryParam {
  /** 订单id */
  orderId: number;
  /** 物流公司 */
  deliveryCompany: string;
  /** 物流单号 */
  deliverySn: string;
}
