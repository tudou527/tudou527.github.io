/** */
export interface PmsBrand {
  /** */
  id: number;
  /** */
  name: string;
  /** 首字母 */
  firstLetter: string;
  /** */
  sort: number;
  /** 是否为品牌制造商：0->不是；1->是 */
  factoryStatus: number;
  /** */
  showStatus: number;
  /** 产品数量 */
  productCount: number;
  /** 产品评论数量 */
  productCommentCount: number;
  /** 品牌logo */
  logo: string;
  /** 专区大图 */
  bigPic: string;
  /** 品牌故事 */
  brandStory: string;
}
