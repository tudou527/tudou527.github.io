/** */
export interface PmsProductAttributeValue {
  /** */
  id: number;
  /** */
  productId: number;
  /** */
  productAttributeId: number;
  /** 手动添加规格或参数的值，参数单值，规格有多个时以逗号隔开 */
  value: string;
}
