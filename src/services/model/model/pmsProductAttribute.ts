/** */
export interface PmsProductAttribute {
  /** */
  id: number;
  /** */
  productAttributeCategoryId: number;
  /** */
  name: string;
  /** 属性选择类型：0->唯一；1->单选；2->多选 */
  selectType: number;
  /** 属性录入方式：0->手工录入；1->从列表中选取 */
  inputType: number;
  /** 可选值列表，以逗号隔开 */
  inputList: string;
  /** 排序字段：最高的可以单独上传图片 */
  sort: number;
  /** 分类筛选样式：1->普通；1->颜色 */
  filterType: number;
  /** 检索类型；0->不需要进行检索；1->关键字检索；2->范围检索 */
  searchType: number;
  /** 相同属性产品是否关联；0->不关联；1->关联 */
  relatedStatus: number;
  /** 是否支持手动新增；0->不支持；1->支持 */
  handAddStatus: number;
  /** 属性的类型；0->规格；1->参数 */
  type: number;
}
