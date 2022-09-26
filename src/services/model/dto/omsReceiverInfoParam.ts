/**
 * 订单修改收货人信息参数
 * Created by macro on 2018/10/29.
 */
export interface OmsReceiverInfoParam {
  /** 订单ID */
  orderId: number;
  /** 收货人姓名 */
  receiverName: string;
  /** 收货人电话 */
  receiverPhone: string;
  /** 收货人邮编 */
  receiverPostCode: string;
  /** 详细地址 */
  receiverDetailAddress: string;
  /** 省份/直辖市 */
  receiverProvince: string;
  /** 城市 */
  receiverCity: string;
  /** 区 */
  receiverRegion: string;
  /** 订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单 */
  status: number;
}
