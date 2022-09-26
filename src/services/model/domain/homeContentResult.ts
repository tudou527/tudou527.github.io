import { SmsHomeAdvertise } from "../model/smsHomeAdvertise";
import { PmsBrand } from "../model/pmsBrand";
import { HomeFlashPromotion } from "./homeFlashPromotion";
import { PmsProduct } from "../model/pmsProduct";
import { CmsSubject } from "../model/cmsSubject";

/**
 * 首页内容返回信息封装
 * Created by macro on 2019/1/28.
 */
export interface HomeContentResult {
  /** 轮播广告 */
  advertiseList: Array<SmsHomeAdvertise>;
  /** 推荐品牌 */
  brandList: Array<PmsBrand>;
  /** 当前秒杀场次 */
  homeFlashPromotion: HomeFlashPromotion;
  /** 新品推荐 */
  newProductList: Array<PmsProduct>;
  /** 人气推荐 */
  hotProductList: Array<PmsProduct>;
  /** 推荐专题 */
  subjectList: Array<CmsSubject>;
}
