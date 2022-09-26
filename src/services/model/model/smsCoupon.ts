/** */
export interface SmsCoupon {
  /** */
  id: number;
  /** 优惠券类型；0->全场赠券；1->会员赠券；2->购物赠券；3->注册赠券 */
  type: number;
  /** */
  name: string;
  /** 使用平台：0->全部；1->移动；2->PC */
  platform: number;
  /** 数量 */
  count: number;
  /** 金额 */
  amount: number;
  /** 每人限领张数 */
  perLimit: number;
  /** 使用门槛；0表示无门槛 */
  minPoint: number;
  /** */
  startTime: Date;
  /** */
  endTime: Date;
  /** 使用类型：0->全场通用；1->指定分类；2->指定商品 */
  useType: number;
  /** 备注 */
  note: string;
  /** 发行数量 */
  publishCount: number;
  /** 已使用数量 */
  useCount: number;
  /** 领取数量 */
  receiveCount: number;
  /** 可以领取的日期 */
  enableTime: Date;
  /** 优惠码 */
  code: string;
  /** 可领取的会员类型：0->无限时 */
  memberLevel: number;
}