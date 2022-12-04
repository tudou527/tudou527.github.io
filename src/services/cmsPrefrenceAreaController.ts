// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import request from '@/service/config'
import { CommonResult } from "./model/api/commonResult";
import { CmsPrefrenceArea } from "./model/model/cmsPrefrenceArea";

/** 获取所有商品优选 */
export async function listAll() {
  return request<CommonResult<Array<CmsPrefrenceArea>>>({
    method: 'GET',
    url: '/prefrenceArea/listAll',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
