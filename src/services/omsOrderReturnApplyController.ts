// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import request from '@/service/config'
import { OmsReturnApplyQueryParam } from "./model/dto/omsReturnApplyQueryParam";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";
import { OmsOrderReturnApply } from "./model/model/omsOrderReturnApply";
import { OmsUpdateStatusParam } from "./model/dto/omsUpdateStatusParam";

/** 分页查询退货申请 */
export async function list(args: {
    queryParam?: OmsReturnApplyQueryParam,
    pageSize?: number,
    pageNum?: number,
  }) {
  return request<CommonResult<CommonPage<OmsOrderReturnApply>>>({
    method: 'GET',
    url: '/returnApply/list',
    params: {
      queryParam: args.queryParam,
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量删除退货申请 */
export async function deleteController(args: {
    ids?: Array<number>,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: '/returnApply/delete',
    data: {
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取退货申请详情 */
export async function getItem(args: {
    id: number,
  }) {
  return request<CommonResult>({
    method: 'GET',
    url: `/returnApply/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改退货申请状态 */
export async function updateStatus(args: {
    id: number,
    statusParam?: OmsUpdateStatusParam,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: `/returnApply/update/status/${args.id}`,
    data: {
      statusParam: args.statusParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
