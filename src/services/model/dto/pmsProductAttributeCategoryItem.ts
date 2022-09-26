import { PmsProductAttribute } from "../model/pmsProductAttribute";
import { PmsProductAttributeCategory } from "../model/pmsProductAttributeCategory";

/**
 * 带有属性的商品属性分类
 * Created by macro on 2018/5/24.
 */
export interface PmsProductAttributeCategoryItem extends PmsProductAttributeCategory {
  /** 商品属性列表 */
  productAttributeList: Array<PmsProductAttribute>;
}
