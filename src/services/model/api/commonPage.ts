/**
 * 分页数据封装类
 * Created by macro on 2019/4/19.
 */
export interface CommonPage<T = any> {
  /** 当前页码 */
  pageNum: number;
  /** 每页数量 */
  pageSize: number;
  /** 总页数 */
  totalPage: number;
  /** 总条数 */
  total: number;
  /** 分页数据 */
  list: Array<T>;
}
