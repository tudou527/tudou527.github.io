// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import { PmsProductCategory } from "../model/pmsProductCategory";

/**
 * 包含子分类的商品分类
 * Created by macro on 2020/4/6.
 */
export interface PmsProductCategoryNode extends PmsProductCategory {
  /** 子分类集合 */
  children: Array<PmsProductCategoryNode>;
}
