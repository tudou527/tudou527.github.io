// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import request from '../utils/request';
import { MemberProductCollection } from "./model/domain/memberProductCollection";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";

/** 添加商品收藏 */
export async function add(args: {
    productCollection?: MemberProductCollection,
  }) {
  return request<CommonResult>({
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

/** 删除商品收藏（由于 MemberProductCollectionController 中 delete 方法名为关键字，此处已自动重命名为 deleteController) */
export async function deleteController(args: {
    productId?: number,
  }) {
  return request<CommonResult>({
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
  }) {
  return request<CommonResult<CommonPage<MemberProductCollection>>>({
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
  }) {
  return request<CommonResult<MemberProductCollection>>({
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
export async function clear() {
  return request<CommonResult>({
    method: 'POST',
    url: '/member/productCollection/clear',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
