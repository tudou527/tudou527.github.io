import { PmsProduct } from "../model/pmsProduct";
import { PmsBrand } from "../model/pmsBrand";
import { PmsProductAttribute } from "../model/pmsProductAttribute";
import { PmsProductAttributeValue } from "../model/pmsProductAttributeValue";
import { PmsSkuStock } from "../model/pmsSkuStock";
import { PmsProductLadder } from "../model/pmsProductLadder";
import { PmsProductFullReduction } from "../model/pmsProductFullReduction";
import { SmsCoupon } from "../model/smsCoupon";

/**
 * 前台商品详情
 * Created by macro on 2020/4/6.
 */
export interface PmsPortalProductDetail {
  /** 商品信息 */
  product: PmsProduct;
  /** 商品品牌 */
  brand: PmsBrand;
  /** 商品属性与参数 */
  productAttributeList: Array<PmsProductAttribute>;
  /** 手动录入的商品属性与参数值 */
  productAttributeValueList: Array<PmsProductAttributeValue>;
  /** 商品的sku库存信息 */
  skuStockList: Array<PmsSkuStock>;
  /** 商品阶梯价格设置 */
  productLadderList: Array<PmsProductLadder>;
  /** 商品满减价格设置 */
  productFullReductionList: Array<PmsProductFullReduction>;
  /** 商品可用优惠券 */
  couponList: Array<SmsCoupon>;
}
