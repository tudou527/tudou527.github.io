/** */
export interface OmsOrderReturnApply {
  /** */
  id: number;
  /** 订单id */
  orderId: number;
  /** 收货地址表id */
  companyAddressId: number;
  /** 退货商品id */
  productId: number;
  /** 订单编号 */
  orderSn: string;
  /** 申请时间 */
  createTime: Date;
  /** 会员用户名 */
  memberUsername: string;
  /** 退款金额 */
  returnAmount: number;
  /** 退货人姓名 */
  returnName: string;
  /** 退货人电话 */
  returnPhone: string;
  /** 申请状态：0->待处理；1->退货中；2->已完成；3->已拒绝 */
  status: number;
  /** 处理时间 */
  handleTime: Date;
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
  /** 处理备注 */
  handleNote: string;
  /** 处理人员 */
  handleMan: string;
  /** 收货人 */
  receiveMan: string;
  /** 收货时间 */
  receiveTime: Date;
  /** 收货备注 */
  receiveNote: string;
}
