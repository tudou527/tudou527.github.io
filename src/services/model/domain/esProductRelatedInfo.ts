/**
 * 搜索商品的关联信息，包括品牌名称，分类名称及属性
 * Created by macro on 2018/6/27.
 */
export interface EsProductRelatedInfo {
  /** */
  brandNames: Array<string>;
  /** */
  productCategoryNames: Array<string>;
  /** */
  productAttrs: Array<EsProductRelatedInfoProductAttr>;
}

/** */
export interface EsProductRelatedInfoProductAttr {
  /** */
  attrId: number;
  /** */
  attrName: string;
  /** */
  attrValues: Array<string>;
}
