import request from "@/utils/request";
import { OmsOrderQueryParam } from "./model/dto/omsOrderQueryParam";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";
import { OmsOrder } from "./model/model/omsOrder";
import { OmsOrderDeliveryParam } from "./model/dto/omsOrderDeliveryParam";
import { OmsOrderDetail } from "./model/dto/omsOrderDetail";
import { OmsReceiverInfoParam } from "./model/dto/omsReceiverInfoParam";
import { OmsMoneyInfoParam } from "./model/dto/omsMoneyInfoParam";

/** 查询订单 */
export async function list(args: {
    queryParam?: OmsOrderQueryParam,
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<CommonPage<OmsOrder>>> {
  return request({
    method: 'GET',
    url: '/order/list',
    params: {
      queryParam: args.queryParam,
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量发货 */
export async function delivery(args: {
    deliveryParamList?: Array<OmsOrderDeliveryParam>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/order/update/delivery',
    data: {
      deliveryParamList: args.deliveryParamList,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量关闭订单 */
export async function close(args: {
    ids?: Array<number>,
    note?: string,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/order/update/close',
    data: {
      ids: args.ids,
      note: args.note,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量删除订单 */
export async function deleteController(args: {
    ids?: Array<number>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/order/delete',
    data: {
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取订单详情：订单信息、商品信息、操作记录 */
export async function detail(args: {
    id: number,
  }): Promise<CommonResult<OmsOrderDetail>> {
  return request({
    method: 'GET',
    url: `/order/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改收货人信息（由于 OmsOrderController 中 updateReceiverInfo 方法重复，此处已自动重命名为 updateReceiverInfoWithPost) */
export async function updateReceiverInfoWithPost(args: {
    receiverInfoParam?: OmsReceiverInfoParam,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/order/update/receiverInfo',
    data: {
      receiverInfoParam: args.receiverInfoParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改订单费用信息（由于 OmsOrderController 中 updateReceiverInfo 方法重复，此处已自动重命名为 updateMoneyInfoWithPost) */
export async function updateMoneyInfoWithPost(args: {
    moneyInfoParam?: OmsMoneyInfoParam,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/order/update/moneyInfo',
    data: {
      moneyInfoParam: args.moneyInfoParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 备注订单 */
export async function updateNote(args: {
    id?: number,
    note?: string,
    status?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/order/update/note',
    data: {
      id: args.id,
      note: args.note,
      status: args.status,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}