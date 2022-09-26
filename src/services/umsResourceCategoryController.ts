import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { UmsResourceCategory } from "./model/model/umsResourceCategory";

/** 查询所有后台资源分类 */
export async function listAll(): Promise<CommonResult<Array<UmsResourceCategory>>> {
  return request({
    method: 'GET',
    url: '/resourceCategory/listAll',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 添加后台资源分类 */
export async function create(args: {
    umsResourceCategory?: UmsResourceCategory,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/resourceCategory/create',
    data: {
      umsResourceCategory: args.umsResourceCategory,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改后台资源分类 */
export async function update(args: {
    id: number,
    umsResourceCategory?: UmsResourceCategory,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/resourceCategory/update/${args.id}`,
    data: {
      umsResourceCategory: args.umsResourceCategory,
    },
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
    url: `/resourceCategory/delete/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
