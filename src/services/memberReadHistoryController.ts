import request from "@/utils/request";
import { MemberReadHistory } from "./model/domain/memberReadHistory";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";

/** 创建浏览记录 */
export async function create(args: {
    memberReadHistory?: MemberReadHistory,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/member/readHistory/create',
    data: {
      memberReadHistory: args.memberReadHistory,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 删除浏览记录 */
export async function deleteController(args: {
    ids?: Array<string>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/member/readHistory/delete',
    data: {
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 清空浏览记录 */
export async function clear(): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/member/readHistory/clear',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页获取浏览记录 */
export async function list(args: {
    pageNum?: number,
    pageSize?: number,
  }): Promise<CommonResult<CommonPage<MemberReadHistory>>> {
  return request({
    method: 'GET',
    url: '/member/readHistory/list',
    params: {
      pageNum: args.pageNum,
      pageSize: args.pageSize,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
