// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import request from '../utils/request';
import { UmsMenu } from "./model/model/umsMenu";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";
import { UmsMenuNode } from "./model/dto/umsMenuNode";

/** 添加后台菜单 */
export async function create(args: {
    umsMenu?: UmsMenu,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: '/menu/create',
    data: {
      umsMenu: args.umsMenu,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改后台菜单 */
export async function update(args: {
    id: number,
    umsMenu?: UmsMenu,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: `/menu/update/${args.id}`,
    data: {
      umsMenu: args.umsMenu,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据ID获取菜单详情 */
export async function getItem(args: {
    id: number,
  }) {
  return request<CommonResult<UmsMenu>>({
    method: 'GET',
    url: `/menu/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据ID删除后台菜单 */
export async function deleteController(args: {
    id: number,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: `/menu/delete/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页查询后台菜单 */
export async function list(args: {
    parentId: number,
    pageSize?: number,
    pageNum?: number,
  }) {
  return request<CommonResult<CommonPage<UmsMenu>>>({
    method: 'GET',
    url: `/menu/list/${args.parentId}`,
    params: {
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 树形结构返回所有菜单列表 */
export async function treeList() {
  return request<CommonResult<Array<UmsMenuNode>>>({
    method: 'GET',
    url: '/menu/treeList',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改菜单显示状态 */
export async function updateHidden(args: {
    id: number,
    hidden?: number,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: `/menu/updateHidden/${args.id}`,
    data: {
      hidden: args.hidden,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
