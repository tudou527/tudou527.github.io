import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { ConfirmOrderResult } from "./model/domain/confirmOrderResult";
import { OrderParam } from "./model/domain/orderParam";
import { CommonPage } from "./model/api/commonPage";
import { OmsOrderDetail } from "./model/domain/omsOrderDetail";

/** 根据购物车信息生成确认单 */
export async function generateConfirmOrder(args: {
    cartIds?: Array<number>,
  }): Promise<CommonResult<ConfirmOrderResult>> {
  return request({
    method: 'POST',
    url: '/order/generateConfirmOrder',
    data: {
      cartIds: args.cartIds,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据购物车信息生成订单 */
export async function generateOrder(args: {
    orderParam?: OrderParam,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/order/generateOrder',
    data: {
      orderParam: args.orderParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 用户支付成功的回调 */
export async function paySuccess(args: {
    orderId?: number,
    payType?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/order/paySuccess',
    data: {
      orderId: args.orderId,
      payType: args.payType,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 自动取消超时订单 */
export async function cancelTimeOutOrder(): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/order/cancelTimeOutOrder',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 取消单个超时订单 */
export async function cancelOrder(args: {
    orderId?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/order/cancelOrder',
    data: {
      orderId: args.orderId,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 按状态分页获取用户订单列表 */
export async function list(args: {
    status?: number,
    pageNum?: number,
    pageSize?: number,
  }): Promise<CommonResult<CommonPage<OmsOrderDetail>>> {
  return request({
    method: 'GET',
    url: '/order/list',
    params: {
      status: args.status,
      pageNum: args.pageNum,
      pageSize: args.pageSize,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据ID获取订单详情 */
export async function detail(args: {
    orderId: number,
  }): Promise<CommonResult<OmsOrderDetail>> {
  return request({
    method: 'GET',
    url: `/order/detail/${args.orderId}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 用户取消订单 */
export async function cancelUserOrder(args: {
    orderId?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/order/cancelUserOrder',
    data: {
      orderId: args.orderId,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 用户确认收货 */
export async function confirmReceiveOrder(args: {
    orderId?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/order/confirmReceiveOrder',
    data: {
      orderId: args.orderId,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 用户删除订单 */
export async function deleteOrder(args: {
    orderId?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/order/deleteOrder',
    data: {
      orderId: args.orderId,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}