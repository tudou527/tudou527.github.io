import request from "@/utils/request";
import { UmsResource } from "./model/model/umsResource";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";

/** 添加后台资源 */
export async function create(args: {
    umsResource?: UmsResource,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/resource/create',
    data: {
      umsResource: args.umsResource,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改后台资源 */
export async function update(args: {
    id: number,
    umsResource?: UmsResource,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/resource/update/${args.id}`,
    data: {
      umsResource: args.umsResource,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据ID获取资源详情 */
export async function getItem(args: {
    id: number,
  }): Promise<CommonResult<UmsResource>> {
  return request({
    method: 'GET',
    url: `/resource/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据ID删除后台资源 */
export async function deleteController(args: {
    id: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/resource/delete/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页模糊查询后台资源 */
export async function list(args: {
    categoryId?: number,
    nameKeyword?: string,
    urlKeyword?: string,
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<CommonPage<UmsResource>>> {
  return request({
    method: 'GET',
    url: '/resource/list',
    params: {
      categoryId: args.categoryId,
      nameKeyword: args.nameKeyword,
      urlKeyword: args.urlKeyword,
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 查询所有后台资源 */
export async function listAll(): Promise<CommonResult<Array<UmsResource>>> {
  return request({
    method: 'GET',
    url: '/resource/listAll',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
