import request from "@/utils/request";
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
  }): Promise<CommonResult<CommonPage<SmsCouponHistory>>> {
  return request({
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
