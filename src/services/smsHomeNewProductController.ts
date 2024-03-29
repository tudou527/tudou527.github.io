// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import request from '../utils/request';
import { SmsHomeNewProduct } from "./model/model/smsHomeNewProduct";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";

/** 添加首页新品 */
export async function create(args: {
    homeNewProductList?: Array<SmsHomeNewProduct>,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: '/home/newProduct/create',
    data: {
      homeNewProductList: args.homeNewProductList,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改首页新品排序 */
export async function updateSort(args: {
    id: number,
    sort?: number,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: `/home/newProduct/update/sort/${args.id}`,
    data: {
      sort: args.sort,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量删除首页新品（由于 SmsHomeNewProductController 中 delete 方法名为关键字，此处已自动重命名为 deleteController) */
export async function deleteController(args: {
    ids?: Array<number>,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: '/home/newProduct/delete',
    params: {
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量修改首页新品状态 */
export async function updateRecommendStatus(args: {
    ids?: Array<number>,
    recommendStatus?: number,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: '/home/newProduct/update/recommendStatus',
    params: {
      ids: args.ids,
      recommendStatus: args.recommendStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页查询首页新品 */
export async function list(args: {
    productName?: string,
    recommendStatus?: number,
    pageSize?: number,
    pageNum?: number,
  }) {
  return request<CommonResult<CommonPage<SmsHomeNewProduct>>>({
    method: 'GET',
    url: '/home/newProduct/list',
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
