// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import request from '../utils/request';
import { CommonResult } from "./model/api/commonResult";
import { OmsCompanyAddress } from "./model/model/omsCompanyAddress";

/** 获取所有收货地址 */
export async function list() {
  return request<CommonResult<Array<OmsCompanyAddress>>>({
    method: 'GET',
    url: '/companyAddress/list',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
