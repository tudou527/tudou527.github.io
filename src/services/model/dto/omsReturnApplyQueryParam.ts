/**
 * 订单退货申请查询参数
 * Created by macro on 2018/10/18.
 */
export interface OmsReturnApplyQueryParam {
  /** 服务单号 */
  id: number;
  /** 收货人姓名/号码 */
  receiverKeyword: string;
  /** 申请状态：0->待处理；1->退货中；2->已完成；3->已拒绝 */
  status: number;
  /** 申请时间 */
  createTime: string;
  /** 处理人员 */
  handleMan: string;
  /** 处理时间 */
  handleTime: string;
}
