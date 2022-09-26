/** */
export interface SmsFlashPromotionSession {
  /** 编号 */
  id: number;
  /** 场次名称 */
  name: string;
  /** 每日开始时间 */
  startTime: Date;
  /** 每日结束时间 */
  endTime: Date;
  /** 启用状态：0->不启用；1->启用 */
  status: number;
  /** 创建时间 */
  createTime: Date;
}
