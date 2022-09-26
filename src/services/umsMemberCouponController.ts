import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { SmsCouponHistory } from "./model/model/smsCouponHistory";
import { SmsCoupon } from "./model/model/smsCoupon";
import { SmsCouponHistoryDetail } from "./model/domain/smsCouponHistoryDetail";

/** 领取指定优惠券 */
export async function add(args: {
    couponId: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/member/coupon/add/${args.couponId}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取会员优惠券历史列表 */
export async function listHistory(args: {
    useStatus?: number,
  }): Promise<CommonResult<Array<SmsCouponHistory>>> {
  return request({
    method: 'GET',
    url: '/member/coupon/listHistory',
    params: {
      useStatus: args.useStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取会员优惠券列表 */
export async function list(args: {
    useStatus?: number,
  }): Promise<CommonResult<Array<SmsCoupon>>> {
  return request({
    method: 'GET',
    url: '/member/coupon/list',
    params: {
      useStatus: args.useStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取登录会员购物车的相关优惠券 */
export async function listCart(args: {
    type: number,
  }): Promise<CommonResult<Array<SmsCouponHistoryDetail>>> {
  return request({
    method: 'GET',
    url: `/member/coupon/list/cart/${args.type}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取当前商品相关优惠券 */
export async function listByProduct(args: {
    productId: number,
  }): Promise<CommonResult<Array<SmsCoupon>>> {
  return request({
    method: 'GET',
    url: `/member/coupon/listByProduct/${args.productId}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
