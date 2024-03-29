// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
/**
 * 订单查询参数
 * Created by macro on 2018/10/11.
 */
export interface OmsOrderQueryParam {
  /** 订单编号 */
  orderSn: string;
  /** 收货人姓名/号码 */
  receiverKeyword: string;
  /** 订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单 */
  status: number;
  /** 订单类型：0->正常订单；1->秒杀订单 */
  orderType: number;
  /** 订单来源：0->PC订单；1->app订单 */
  sourceType: number;
  /** 订单提交时间 */
  createTime: string;
}
