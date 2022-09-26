/**
 * 品牌传递参数
 * Created by macro on 2019/4/8.
 */
export interface PmsBrandDto {
  /** 品牌名称 */
  name: string;
  /** 品牌首字母 */
  firstLetter: string;
  /** 排序字段 */
  sort: number;
  /** 是否为厂家制造商 */
  factoryStatus: number;
  /** 是否进行显示 */
  showStatus: number;
  /** 品牌logo */
  logo: string;
  /** 品牌大图 */
  bigPic: string;
  /** 品牌故事 */
  brandStory: string;
}
