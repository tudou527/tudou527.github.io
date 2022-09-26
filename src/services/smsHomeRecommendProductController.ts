import request from "@/utils/request";
import { SmsHomeRecommendProduct } from "./model/model/smsHomeRecommendProduct";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";

/** 添加首页推荐 */
export async function create(args: {
    homeRecommendProductList?: Array<SmsHomeRecommendProduct>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/home/recommendProduct/create',
    data: {
      homeRecommendProductList: args.homeRecommendProductList,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改推荐排序 */
export async function updateSort(args: {
    id: number,
    sort?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/home/recommendProduct/update/sort/${args.id}`,
    data: {
      sort: args.sort,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量删除推荐 */
export async function deleteController(args: {
    ids?: Array<number>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/home/recommendProduct/delete',
    data: {
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量修改推荐状态 */
export async function updateRecommendStatus(args: {
    ids?: Array<number>,
    recommendStatus?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/home/recommendProduct/update/recommendStatus',
    data: {
      ids: args.ids,
      recommendStatus: args.recommendStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页查询推荐 */
export async function list(args: {
    productName?: string,
    recommendStatus?: number,
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<CommonPage<SmsHomeRecommendProduct>>> {
  return request({
    method: 'GET',
    url: '/home/recommendProduct/list',
    params: {
      productName: args.productName,
      recommendStatus: args.recommendStatus,
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
