import request from "@/utils/request";
import { SmsHomeAdvertise } from "./model/model/smsHomeAdvertise";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";

/** 添加广告 */
export async function create(args: {
    advertise?: SmsHomeAdvertise,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/home/advertise/create',
    data: {
      advertise: args.advertise,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 删除广告 */
export async function deleteController(args: {
    ids?: Array<number>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/home/advertise/delete',
    data: {
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改上下线状态 */
export async function updateStatus(args: {
    id: number,
    status?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/home/advertise/update/status/${args.id}`,
    data: {
      status: args.status,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取广告详情 */
export async function getItem(args: {
    id: number,
  }): Promise<CommonResult<SmsHomeAdvertise>> {
  return request({
    method: 'GET',
    url: `/home/advertise/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改广告 */
export async function update(args: {
    id: number,
    advertise?: SmsHomeAdvertise,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/home/advertise/update/${args.id}`,
    data: {
      advertise: args.advertise,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页查询广告 */
export async function list(args: {
    name?: string,
    type?: number,
    endTime?: string,
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<CommonPage<SmsHomeAdvertise>>> {
  return request({
    method: 'GET',
    url: '/home/advertise/list',
    params: {
      name: args.name,
      type: args.type,
      endTime: args.endTime,
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
