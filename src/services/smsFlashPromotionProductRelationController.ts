import request from "@/utils/request";
import { SmsFlashPromotionProductRelation } from "./model/model/smsFlashPromotionProductRelation";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";
import { SmsFlashPromotionProduct } from "./model/dto/smsFlashPromotionProduct";

/** 批量选择商品添加关联 */
export async function create(args: {
    relationList?: Array<SmsFlashPromotionProductRelation>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/flashProductRelation/create',
    data: {
      relationList: args.relationList,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改关联信息 */
export async function update(args: {
    id: number,
    relation?: SmsFlashPromotionProductRelation,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/flashProductRelation/update/${args.id}`,
    data: {
      relation: args.relation,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 删除关联 */
export async function deleteController(args: {
    id: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/flashProductRelation/delete/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取管理商品促销信息 */
export async function getItem(args: {
    id: number,
  }): Promise<CommonResult<SmsFlashPromotionProductRelation>> {
  return request({
    method: 'GET',
    url: `/flashProductRelation/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页查询不同场次关联及商品信息 */
export async function list(args: {
    flashPromotionId?: number,
    flashPromotionSessionId?: number,
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<CommonPage<SmsFlashPromotionProduct>>> {
  return request({
    method: 'GET',
    url: '/flashProductRelation/list',
    params: {
      flashPromotionId: args.flashPromotionId,
      flashPromotionSessionId: args.flashPromotionSessionId,
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
