import request from "@/utils/request";
import { MemberBrandAttention } from "./model/domain/memberBrandAttention";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";

/** 添加品牌关注 */
export async function add(args: {
    memberBrandAttention?: MemberBrandAttention,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/member/attention/add',
    data: {
      memberBrandAttention: args.memberBrandAttention,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 取消品牌关注 */
export async function deleteController(args: {
    brandId?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/member/attention/delete',
    data: {
      brandId: args.brandId,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 显示当前用户品牌关注列表 */
export async function list(args: {
    pageNum?: number,
    pageSize?: number,
  }): Promise<CommonResult<CommonPage<MemberBrandAttention>>> {
  return request({
    method: 'GET',
    url: '/member/attention/list',
    params: {
      pageNum: args.pageNum,
      pageSize: args.pageSize,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 显示品牌关注详情 */
export async function detail(args: {
    brandId?: number,
  }): Promise<CommonResult<MemberBrandAttention>> {
  return request({
    method: 'GET',
    url: '/member/attention/detail',
    params: {
      brandId: args.brandId,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 清空当前用户品牌关注列表 */
export async function clear(): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/member/attention/clear',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
