// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import request from '../utils/request';
import { SmsCouponParam } from "./model/dto/smsCouponParam";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";
import { SmsCoupon } from "./model/model/smsCoupon";

/** 添加优惠券 */
export async function add(args: {
    couponParam?: SmsCouponParam,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: '/coupon/create',
    data: {
      couponParam: args.couponParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 删除优惠券（由于 SmsCouponController 中 delete 方法名为关键字，此处已自动重命名为 deleteController) */
export async function deleteController(args: {
    id: number,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: `/coupon/delete/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改优惠券 */
export async function update(args: {
    id: number,
    couponParam?: SmsCouponParam,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: `/coupon/update/${args.id}`,
    data: {
      couponParam: args.couponParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据优惠券名称和类型分页获取优惠券列表 */
export async function list(args: {
    name?: string,
    type?: number,
    pageSize?: number,
    pageNum?: number,
  }) {
  return request<CommonResult<CommonPage<SmsCoupon>>>({
    method: 'GET',
    url: '/coupon/list',
    params: {
      name: args.name,
      type: args.type,
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取单个优惠券的详细信息 */
export async function getItem(args: {
    id: number,
  }) {
  return request<CommonResult<SmsCouponParam>>({
    method: 'GET',
    url: `/coupon/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
