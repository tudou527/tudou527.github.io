/** */
export interface UmsIntegrationConsumeSetting {
  /** */
  id: number;
  /** 每一元需要抵扣的积分数量 */
  deductionPerAmount: number;
  /** 每笔订单最高抵用百分比 */
  maxPercentPerOrder: number;
  /** 每次使用积分最小单位100 */
  useUnit: number;
  /** 是否可以和优惠券同用；0->不可以；1->可以 */
  couponStatus: number;
}
