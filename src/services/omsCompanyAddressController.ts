import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { OmsCompanyAddress } from "./model/model/omsCompanyAddress";

/** 获取所有收货地址 */
export async function list(): Promise<CommonResult<Array<OmsCompanyAddress>>> {
  return request({
    method: 'GET',
    url: '/companyAddress/list',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
