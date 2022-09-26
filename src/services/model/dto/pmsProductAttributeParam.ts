/**
 * 商品属性参数
 * Created by macro on 2018/4/26.
 */
export interface PmsProductAttributeParam {
  /** 属性分类ID */
  productAttributeCategoryId: number;
  /** 属性名称 */
  name: string;
  /** 属性选择类型：0->唯一；1->单选；2->多选 */
  selectType: number;
  /** 属性录入方式：0->手工录入；1->从列表中选取 */
  inputType: number;
  /** 可选值列表，以逗号隔开 */
  inputList: string;
  /** */
  sort: number;
  /** 分类筛选样式：0->普通；1->颜色 */
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
