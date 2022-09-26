import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { UmsMemberLevel } from "./model/model/umsMemberLevel";

/** 查询所有会员等级 */
export async function list(args: {
    defaultStatus?: number,
  }): Promise<CommonResult<Array<UmsMemberLevel>>> {
  return request({
    method: 'GET',
    url: '/memberLevel/list',
    params: {
      defaultStatus: args.defaultStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
