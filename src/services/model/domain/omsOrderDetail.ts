import { OmsOrderItem } from "../model/omsOrderItem";
import { CommonResult } from "../api/commonResult";
import { ConfirmOrderResult } from "./confirmOrderResult";

/**
 * 包含商品信息的订单详情
 * Created by macro on 2018/9/4.
 */
export interface OmsOrderDetail extends CommonResult<ConfirmOrderResult> {
  /** 订单商品列表 */
  orderItemList: Array<OmsOrderItem>;
}
