// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import { PmsProductCategory } from "../model/pmsProductCategory";

/**
 * 包含子级分类的商品分类
 * Created by macro on 2018/5/25.
 */
export interface PmsProductCategoryWithChildrenItem extends PmsProductCategory {
  /** 子级分类 */
  children: Array<PmsProductCategory>;
}