import request from "@/utils/request";
import { SmsFlashPromotion } from "./model/model/smsFlashPromotion";
import { CommonResult } from "./model/api/commonResult";

/** 添加活动 */
export async function create(args: {
    flashPromotion?: SmsFlashPromotion,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/flash/create',
    data: {
      flashPromotion: args.flashPromotion,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 编辑活动（由于 SmsFlashPromotionController 中 update 方法重复，此处已自动重命名为 updateIdWithPost) */
export async function updateIdWithPost(args: {
    id: number,
    flashPromotion?: SmsFlashPromotion,
  }): Promise<any> {
  return request({
    method: 'POST',
    url: `/flash/update/${args.id}`,
    data: {
      flashPromotion: args.flashPromotion,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 删除活动 */
export async function deleteController(args: {
    id: number,
  }): Promise<any> {
  return request({
    method: 'POST',
    url: `/flash/delete/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改上下线状态（由于 SmsFlashPromotionController 中 update 方法重复，此处已自动重命名为 statusIdWithPost) */
export async function statusIdWithPost(args: {
    id: number,
    status?: number,
  }): Promise<any> {
  return request({
    method: 'POST',
    url: `/flash/update/status/${args.id}`,
    data: {
      status: args.status,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取活动详情（由于 SmsFlashPromotionController 中 getItem 方法重复，此处已自动重命名为 flashIdWithGet) */
export async function flashIdWithGet(args: {
    id: number,
  }): Promise<any> {
  return request({
    method: 'GET',
    url: `/flash/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据活动名称分页查询（由于 SmsFlashPromotionController 中 getItem 方法重复，此处已自动重命名为 flashListWithGet) */
export async function flashListWithGet(args: {
    keyword?: string,
    pageSize?: number,
    pageNum?: number,
  }): Promise<any> {
  return request({
    method: 'GET',
    url: '/flash/list',
    params: {
      keyword: args.keyword,
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
