import request from "@/utils/request";
import { OmsOrderReturnReason } from "./model/model/omsOrderReturnReason";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";

/** 添加退货原因 */
export async function create(args: {
    returnReason?: OmsOrderReturnReason,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/returnReason/create',
    data: {
      returnReason: args.returnReason,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改退货原因 */
export async function update(args: {
    id: number,
    returnReason?: OmsOrderReturnReason,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/returnReason/update/${args.id}`,
    data: {
      returnReason: args.returnReason,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量删除退货原因 */
export async function deleteController(args: {
    ids?: Array<number>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/returnReason/delete',
    data: {
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页查询退货原因 */
export async function list(args: {
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<CommonPage<OmsOrderReturnReason>>> {
  return request({
    method: 'GET',
    url: '/returnReason/list',
    params: {
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取单个退货原因详情信息 */
export async function getItem(args: {
    id: number,
  }): Promise<CommonResult<OmsOrderReturnReason>> {
  return request({
    method: 'GET',
    url: `/returnReason/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改退货原因启用状态 */
export async function updateStatus(args: {
    status?: number,
    ids?: Array<number>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/returnReason/update/status',
    data: {
      status: args.status,
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
