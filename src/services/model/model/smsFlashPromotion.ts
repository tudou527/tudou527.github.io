/** */
export interface SmsFlashPromotion {
  /** */
  id: number;
  /** */
  title: string;
  /** 开始日期 */
  startDate: Date;
  /** 结束日期 */
  endDate: Date;
  /** 上下线状态 */
  status: number;
  /** 秒杀时间段名称 */
  createTime: Date;
}
