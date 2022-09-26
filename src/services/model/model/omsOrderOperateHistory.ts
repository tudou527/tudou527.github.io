/** */
export interface OmsOrderOperateHistory {
  /** */
  id: number;
  /** 订单id */
  orderId: number;
  /** 操作人：用户；系统；后台管理员 */
  operateMan: string;
  /** 操作时间 */
  createTime: Date;
  /** 订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单 */
  orderStatus: number;
  /** 备注 */
  note: string;
}
