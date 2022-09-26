/**
 * 会员商品收藏
 * Created by macro on 2018/8/2.
 */
export interface MemberProductCollection {
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
