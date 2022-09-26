import { EsProductAttributeValue } from "./esProductAttributeValue";

/**
 * 搜索商品的信息
 * Created by macro on 2018/6/19.
 */
export interface EsProduct {
  /** */
  id: number;
  /** */
  productSn: string;
  /** */
  brandId: number;
  /** */
  brandName: string;
  /** */
  productCategoryId: number;
  /** */
  productCategoryName: string;
  /** */
  pic: string;
  /** */
  name: string;
  /** */
  subTitle: string;
  /** */
  keywords: string;
  /** */
  price: number;
  /** */
  sale: number;
  /** */
  newStatus: number;
  /** */
  recommandStatus: number;
  /** */
  stock: number;
  /** */
  promotionType: number;
  /** */
  sort: number;
  /** */
  attrValueList: Array<EsProductAttributeValue>;
}
