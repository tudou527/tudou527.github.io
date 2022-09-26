/**
 * 修改订单费用信息参数
 * Created by macro on 2018/10/29.
 */
export interface OmsMoneyInfoParam {
  /** 订单ID */
  orderId: number;
  /** 运费金额 */
  freightAmount: number;
  /** 管理员后台调整订单所使用的折扣金额 */
  discountAmount: number;
  /** 订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单 */
  status: number;
}
