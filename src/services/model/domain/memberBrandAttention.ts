/**
 * 会员品牌关注
 * Created by macro on 2018/8/2.
 */
export interface MemberBrandAttention {
  /** */
  id: string;
  /** */
  memberId: number;
  /** */
  memberNickname: string;
  /** */
  memberIcon: string;
  /** */
  brandId: number;
  /** */
  brandName: string;
  /** */
  brandLogo: string;
  /** */
  brandCity: string;
  /** */
  createTime: Date;
}
