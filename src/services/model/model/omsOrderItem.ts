/** */
export interface OmsOrderItem {
  /** */
  id: number;
  /** 订单id */
  orderId: number;
  /** 订单编号 */
  orderSn: string;
  /** */
  productId: number;
  /** */
  productPic: string;
  /** */
  productName: string;
  /** */
  productBrand: string;
  /** */
  productSn: string;
  /** 销售价格 */
  productPrice: number;
  /** 购买数量 */
  productQuantity: number;
  /** 商品sku编号 */
  productSkuId: number;
  /** 商品sku条码 */
  productSkuCode: string;
  /** 商品分类id */
  productCategoryId: number;
  /** 商品促销名称 */
  promotionName: string;
  /** 商品促销分解金额 */
  promotionAmount: number;
  /** 优惠券优惠分解金额 */
  couponAmount: number;
  /** 积分优惠分解金额 */
  integrationAmount: number;
  /** 该商品经过优惠后的分解金额 */
  realAmount: number;
  /** */
  giftIntegration: number;
  /** */
  giftGrowth: number;
  /** 商品销售属性:[{'key':'颜色','value':'颜色'},{'key':'容量','value':'4G'}] */
  productAttr: string;
}
