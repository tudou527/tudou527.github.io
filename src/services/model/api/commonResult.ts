/**
 * 通用返回对象
 * Created by macro on 2019/4/19.
 */
export interface CommonResult<T = any> {
  /** 状态码 */
  code: number;
  /** 提示信息 */
  message: string;
  /** 数据封装 */
  data: T;
}
