/**
 * 退货申请请求参数
 * Created by macro on 2018/10/17.
 */
export interface OmsOrderReturnApplyParam {
  /** 订单id */
  orderId: number;
  /** 退货商品id */
  productId: number;
  /** 订单编号 */
  orderSn: string;
  /** 会员用户名 */
  memberUsername: string;
  /** 退货人姓名 */
  returnName: string;
  /** 退货人电话 */
  returnPhone: string;
  /** 商品图片 */
  productPic: string;
  /** 商品名称 */
  productName: string;
  /** 商品品牌 */
  productBrand: string;
  /** 商品销售属性：颜色：红色；尺码：xl; */
  productAttr: string;
  /** 退货数量 */
  productCount: number;
  /** 商品单价 */
  productPrice: number;
  /** 商品实际支付单价 */
  productRealPrice: number;
  /** 原因 */
  reason: string;
  /** 描述 */
  description: string;
  /** 凭证图片，以逗号隔开 */
  proofPics: string;
}
