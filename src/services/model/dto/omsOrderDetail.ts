import { OmsOrderItem } from "../model/omsOrderItem";
import { OmsOrderOperateHistory } from "../model/omsOrderOperateHistory";
import { OmsOrder } from "../model/omsOrder";

/**
 * 订单详情信息
 * Created by macro on 2018/10/11.
 */
export interface OmsOrderDetail extends OmsOrder {
  /** 订单商品列表 */
  orderItemList: Array<OmsOrderItem>;
  /** 订单操作记录列表 */
  historyList: Array<OmsOrderOperateHistory>;
}
