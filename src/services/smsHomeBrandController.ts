import request from "@/utils/request";
import { SmsHomeBrand } from "./model/model/smsHomeBrand";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";

/** 添加首页推荐品牌 */
export async function create(args: {
    homeBrandList?: Array<SmsHomeBrand>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/home/brand/create',
    data: {
      homeBrandList: args.homeBrandList,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改推荐品牌排序 */
export async function updateSort(args: {
    id: number,
    sort?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/home/brand/update/sort/${args.id}`,
    data: {
      sort: args.sort,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量删除推荐品牌 */
export async function deleteController(args: {
    ids?: Array<number>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/home/brand/delete',
    data: {
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量修改推荐品牌状态 */
export async function updateRecommendStatus(args: {
    ids?: Array<number>,
    recommendStatus?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/home/brand/update/recommendStatus',
    data: {
      ids: args.ids,
      recommendStatus: args.recommendStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页查询推荐品牌 */
export async function list(args: {
    brandName?: string,
    recommendStatus?: number,
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<CommonPage<SmsHomeBrand>>> {
  return request({
    method: 'GET',
    url: '/home/brand/list',
    params: {
      brandName: args.brandName,
      recommendStatus: args.recommendStatus,
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
