/** */
export interface OmsOrderReturnReason {
  /** */
  id: number;
  /** 退货类型 */
  name: string;
  /** */
  sort: number;
  /** 状态：0->不启用；1->启用 */
  status: number;
  /** 添加时间 */
  createTime: Date;
}
