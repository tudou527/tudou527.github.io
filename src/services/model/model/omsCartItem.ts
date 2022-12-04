// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
/** */
export interface OmsCartItem {
  /** */
  id: number;
  /** */
  productId: number;
  /** */
  productSkuId: number;
  /** */
  memberId: number;
  /** 购买数量 */
  quantity: number;
  /** 添加到购物车的价格 */
  price: number;
  /** 商品主图 */
  productPic: string;
  /** 商品名称 */
  productName: string;
  /** 商品副标题（卖点） */
  productSubTitle: string;
  /** 商品sku条码 */
  productSkuCode: string;
  /** 会员昵称 */
  memberNickname: string;
  /** 创建时间 */
  createDate: Date;
  /** 修改时间 */
  modifyDate: Date;
  /** 是否删除 */
  deleteStatus: number;
  /** 商品分类 */
  productCategoryId: number;
  /** */
  productBrand: string;
  /** */
  productSn: string;
  /** 商品销售属性:[{'key':'颜色','value':'颜色'},{'key':'容量','value':'4G'}] */
  productAttr: string;
}
