import request from "@/utils/request";
import { MemberProductCollection } from "./model/domain/memberProductCollection";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";

/** 添加商品收藏 */
export async function add(args: {
    productCollection?: MemberProductCollection,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/member/productCollection/add',
    data: {
      productCollection: args.productCollection,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 删除商品收藏 */
export async function deleteController(args: {
    productId?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/member/productCollection/delete',
    data: {
      productId: args.productId,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 显示当前用户商品收藏列表 */
export async function list(args: {
    pageNum?: number,
    pageSize?: number,
  }): Promise<CommonResult<CommonPage<MemberProductCollection>>> {
  return request({
    method: 'GET',
    url: '/member/productCollection/list',
    params: {
      pageNum: args.pageNum,
      pageSize: args.pageSize,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 显示商品收藏详情 */
export async function detail(args: {
    productId?: number,
  }): Promise<CommonResult<MemberProductCollection>> {
  return request({
    method: 'GET',
    url: '/member/productCollection/detail',
    params: {
      productId: args.productId,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 清空当前用户商品收藏列表 */
export async function clear(): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/member/productCollection/clear',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
