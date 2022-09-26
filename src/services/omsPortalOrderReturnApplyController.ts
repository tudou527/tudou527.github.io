import request from "@/utils/request";
import { OmsOrderReturnApplyParam } from "./model/domain/omsOrderReturnApplyParam";
import { CommonResult } from "./model/api/commonResult";

/** 申请退货 */
export async function create(args: {
    returnApply?: OmsOrderReturnApplyParam,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/returnApply/create',
    data: {
      returnApply: args.returnApply,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
