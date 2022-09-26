import { PmsProductCategory } from "../model/pmsProductCategory";

/**
 * 包含子级分类的商品分类
 * Created by macro on 2018/5/25.
 */
export interface PmsProductCategoryWithChildrenItem extends PmsProductCategory {
  /** 子级分类 */
  children: Array<PmsProductCategory>;
}
