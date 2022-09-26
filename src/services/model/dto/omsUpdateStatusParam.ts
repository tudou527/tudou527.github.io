/**
 * 确认收货请求参数
 * Created by macro on 2018/10/18.
 */
export interface OmsUpdateStatusParam {
  /** 服务单号 */
  id: number;
  /** 收货地址关联id */
  companyAddressId: number;
  /** 确认退款金额 */
  returnAmount: number;
  /** 处理备注 */
  handleNote: string;
  /** 处理人 */
  handleMan: string;
  /** 收货备注 */
  receiveNote: string;
  /** 收货人 */
  receiveMan: string;
  /** 申请状态：1->退货中；2->已完成；3->已拒绝 */
  status: number;
}
