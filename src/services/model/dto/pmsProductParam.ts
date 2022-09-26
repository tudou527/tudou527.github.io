import { PmsProductLadder } from "../model/pmsProductLadder";
import { PmsProductFullReduction } from "../model/pmsProductFullReduction";
import { PmsMemberPrice } from "../model/pmsMemberPrice";
import { PmsSkuStock } from "../model/pmsSkuStock";
import { PmsProductAttributeValue } from "../model/pmsProductAttributeValue";
import { CmsSubjectProductRelation } from "../model/cmsSubjectProductRelation";
import { CmsPrefrenceAreaProductRelation } from "../model/cmsPrefrenceAreaProductRelation";
import { PmsProduct } from "../model/pmsProduct";

/**
 * 创建和修改商品的请求参数
 * Created by macro on 2018/4/26.
 */
export interface PmsProductParam extends PmsProduct {
  /** 商品阶梯价格设置 */
  productLadderList: Array<PmsProductLadder>;
  /** 商品满减价格设置 */
  productFullReductionList: Array<PmsProductFullReduction>;
  /** 商品会员价格设置 */
  memberPriceList: Array<PmsMemberPrice>;
  /** 商品的sku库存信息 */
  skuStockList: Array<PmsSkuStock>;
  /** 商品参数及自定义规格属性 */
  productAttributeValueList: Array<PmsProductAttributeValue>;
  /** 专题和商品关系 */
  subjectProductRelationList: Array<CmsSubjectProductRelation>;
  /** 优选专区和商品的关系 */
  prefrenceAreaProductRelationList: Array<CmsPrefrenceAreaProductRelation>;
}
