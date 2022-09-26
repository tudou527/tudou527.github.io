/**
 * 会员商品浏览历史记录
 * Created by macro on 2018/8/3.
 */
export interface MemberReadHistory {
  /** */
  id: string;
  /** */
  memberId: number;
  /** */
  memberNickname: string;
  /** */
  memberIcon: string;
  /** */
  productId: number;
  /** */
  productName: string;
  /** */
  productPic: string;
  /** */
  productSubTitle: string;
  /** */
  productPrice: string;
  /** */
  createTime: Date;
}
