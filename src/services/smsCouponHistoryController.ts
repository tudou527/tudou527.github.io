// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import request from '../utils/request';
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";
import { SmsCouponHistory } from "./model/model/smsCouponHistory";

/** 根据优惠券id，使用状态，订单编号分页获取领取记录 */
export async function list(args: {
    couponId?: number,
    useStatus?: number,
    orderSn?: string,
    pageSize?: number,
    pageNum?: number,
  }) {
  return request<CommonResult<CommonPage<SmsCouponHistory>>>({
    method: 'GET',
    url: '/couponHistory/list',
    params: {
      couponId: args.couponId,
      useStatus: args.useStatus,
      orderSn: args.orderSn,
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
