import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { CmsPrefrenceArea } from "./model/model/cmsPrefrenceArea";

/** 获取所有商品优选 */
export async function listAll(): Promise<CommonResult<Array<CmsPrefrenceArea>>> {
  return request({
    method: 'GET',
    url: '/prefrenceArea/listAll',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
