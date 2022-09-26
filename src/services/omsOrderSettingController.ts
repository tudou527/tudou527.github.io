import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { OmsOrderSetting } from "./model/model/omsOrderSetting";

/** 获取指定订单设置 */
export async function getItem(args: {
    id: number,
  }): Promise<CommonResult<OmsOrderSetting>> {
  return request({
    method: 'GET',
    url: `/orderSetting/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改指定订单设置 */
export async function update(args: {
    id: number,
    orderSetting?: OmsOrderSetting,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/orderSetting/update/${args.id}`,
    data: {
      orderSetting: args.orderSetting,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
