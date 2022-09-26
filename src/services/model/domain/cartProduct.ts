import { PmsProductAttribute } from "../model/pmsProductAttribute";
import { PmsSkuStock } from "../model/pmsSkuStock";
import { PmsProduct } from "../model/pmsProduct";

/**
 * 购物车中带规格和SKU的商品信息
 * Created by macro on 2018/8/2.
 */
export interface CartProduct extends PmsProduct {
  /** 商品属性列表 */
  productAttributeList: Array<PmsProductAttribute>;
  /** 商品SKU库存列表 */
  skuStockList: Array<PmsSkuStock>;
}
