import request from "@/utils/request";
import { SmsFlashPromotionSession } from "./model/model/smsFlashPromotionSession";
import { CommonResult } from "./model/api/commonResult";
import { SmsFlashPromotionSessionDetail } from "./model/dto/smsFlashPromotionSessionDetail";

/** 添加场次 */
export async function create(args: {
    promotionSession?: SmsFlashPromotionSession,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/flashSession/create',
    data: {
      promotionSession: args.promotionSession,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改场次 */
export async function update(args: {
    id: number,
    promotionSession?: SmsFlashPromotionSession,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/flashSession/update/${args.id}`,
    data: {
      promotionSession: args.promotionSession,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改启用状态 */
export async function updateStatus(args: {
    id: number,
    status?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/flashSession/update/status/${args.id}`,
    data: {
      status: args.status,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 删除场次 */
export async function deleteController(args: {
    id: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/flashSession/delete/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取场次详情 */
export async function getItem(args: {
    id: number,
  }): Promise<CommonResult<SmsFlashPromotionSession>> {
  return request({
    method: 'GET',
    url: `/flashSession/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取全部场次 */
export async function list(): Promise<CommonResult<Array<SmsFlashPromotionSession>>> {
  return request({
    method: 'GET',
    url: '/flashSession/list',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取全部可选场次及其数量 */
export async function selectList(args: {
    flashPromotionId?: number,
  }): Promise<CommonResult<Array<SmsFlashPromotionSessionDetail>>> {
  return request({
    method: 'GET',
    url: '/flashSession/selectList',
    params: {
      flashPromotionId: args.flashPromotionId,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
