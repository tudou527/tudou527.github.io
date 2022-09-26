import request from "@/utils/request";
import { SmsHomeRecommendSubject } from "./model/model/smsHomeRecommendSubject";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";

/** 添加首页推荐专题 */
export async function create(args: {
    homeRecommendSubjectList?: Array<SmsHomeRecommendSubject>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/home/recommendSubject/create',
    data: {
      homeRecommendSubjectList: args.homeRecommendSubjectList,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改推荐排序 */
export async function updateSort(args: {
    id: number,
    sort?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/home/recommendSubject/update/sort/${args.id}`,
    data: {
      sort: args.sort,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量删除推荐 */
export async function deleteController(args: {
    ids?: Array<number>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/home/recommendSubject/delete',
    data: {
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量修改推荐状态 */
export async function updateRecommendStatus(args: {
    ids?: Array<number>,
    recommendStatus?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/home/recommendSubject/update/recommendStatus',
    data: {
      ids: args.ids,
      recommendStatus: args.recommendStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页查询推荐 */
export async function list(args: {
    subjectName?: string,
    recommendStatus?: number,
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<CommonPage<SmsHomeRecommendSubject>>> {
  return request({
    method: 'GET',
    url: '/home/recommendSubject/list',
    params: {
      subjectName: args.subjectName,
      recommendStatus: args.recommendStatus,
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
