import { PmsProductParam } from "./pmsProductParam";

/**
 * 查询单个商品修改后返回的结果
 * Created by macro on 2018/4/26.
 */
export interface PmsProductResult extends PmsProductParam {
  /** 商品所选分类的父id */
  cateParentId: number;
}
