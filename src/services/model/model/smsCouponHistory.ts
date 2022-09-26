/** */
export interface SmsCouponHistory {
  /** */
  id: number;
  /** */
  couponId: number;
  /** */
  memberId: number;
  /** */
  couponCode: string;
  /** 领取人昵称 */
  memberNickname: string;
  /** 获取类型：0->后台赠送；1->主动获取 */
  getType: number;
  /** */
  createTime: Date;
  /** 使用状态：0->未使用；1->已使用；2->已过期 */
  useStatus: number;
  /** 使用时间 */
  useTime: Date;
  /** 订单编号 */
  orderId: number;
  /** 订单号码 */
  orderSn: string;
}
