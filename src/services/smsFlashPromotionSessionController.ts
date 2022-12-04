// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import request from '@/service/config'
import { SmsFlashPromotionSession } from "./model/model/smsFlashPromotionSession";
import { CommonResult } from "./model/api/commonResult";
import { SmsFlashPromotionSessionDetail } from "./model/dto/smsFlashPromotionSessionDetail";

/** 添加场次 */
export async function create(args: {
    promotionSession?: SmsFlashPromotionSession,
  }) {
  return request<CommonResult>({
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
  }) {
  return request<CommonResult>({
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
  }) {
  return request<CommonResult>({
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
  }) {
  return request<CommonResult>({
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
  }) {
  return request<CommonResult<SmsFlashPromotionSession>>({
    method: 'GET',
    url: `/flashSession/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取全部场次 */
export async function list() {
  return request<CommonResult<Array<SmsFlashPromotionSession>>>({
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
  }) {
  return request<CommonResult<Array<SmsFlashPromotionSessionDetail>>>({
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
