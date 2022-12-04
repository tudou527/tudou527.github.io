// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
/** */
export interface CmsSubject {
  /** */
  id: number;
  /** */
  categoryId: number;
  /** */
  title: string;
  /** 专题主图 */
  pic: string;
  /** 关联产品数量 */
  productCount: number;
  /** */
  recommendStatus: number;
  /** */
  createTime: Date;
  /** */
  collectCount: number;
  /** */
  readCount: number;
  /** */
  commentCount: number;
  /** 画册图片用逗号分割 */
  albumPics: string;
  /** */
  description: string;
  /** 显示状态：0->不显示；1->显示 */
  showStatus: number;
  /** 转发数 */
  forwardCount: number;
  /** 专题分类名称 */
  categoryName: string;
  /** */
  content: string;
}