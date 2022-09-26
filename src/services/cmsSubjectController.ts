import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { CmsSubject } from "./model/model/cmsSubject";
import { CommonPage } from "./model/api/commonPage";

/** 获取全部商品专题 */
export async function listAll(): Promise<CommonResult<Array<CmsSubject>>> {
  return request({
    method: 'GET',
    url: '/subject/listAll',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据专题名称分页获取商品专题 */
export async function getList(args: {
    keyword?: string,
    pageNum?: number,
    pageSize?: number,
  }): Promise<CommonResult<CommonPage<CmsSubject>>> {
  return request({
    method: 'GET',
    url: '/subject/list',
    params: {
      keyword: args.keyword,
      pageNum: args.pageNum,
      pageSize: args.pageSize,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
