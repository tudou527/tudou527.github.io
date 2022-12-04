// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
/**
 * 商品查询参数
 * Created by macro on 2018/4/27.
 */
export interface PmsProductQueryParam {
  /** 上架状态 */
  publishStatus: number;
  /** 审核状态 */
  verifyStatus: number;
  /** 商品名称模糊关键字 */
  keyword: string;
  /** 商品货号 */
  productSn: string;
  /** 商品分类编号 */
  productCategoryId: number;
  /** 商品品牌编号 */
  brandId: number;
}
