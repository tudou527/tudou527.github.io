/**
 * 搜索商品的属性信息
 * Created by macro on 2018/6/27.
 */
export interface EsProductAttributeValue {
  /** */
  id: number;
  /** */
  productAttributeId: number;
  /** */
  value: string;
  /** 属性参数：0->规格；1->参数 */
  type: number;
  /** */
  name: string;
}
