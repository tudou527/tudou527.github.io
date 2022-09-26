import request from "@/utils/request";
import { UmsRole } from "./model/model/umsRole";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";
import { UmsMenu } from "./model/model/umsMenu";
import { UmsResource } from "./model/model/umsResource";

/** 添加角色 */
export async function create(args: {
    role?: UmsRole,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/role/create',
    data: {
      role: args.role,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改角色 */
export async function update(args: {
    id: number,
    role?: UmsRole,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/role/update/${args.id}`,
    data: {
      role: args.role,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量删除角色 */
export async function deleteController(args: {
    ids?: Array<number>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/role/delete',
    data: {
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取所有角色 */
export async function listAll(): Promise<CommonResult<Array<UmsRole>>> {
  return request({
    method: 'GET',
    url: '/role/listAll',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据角色名称分页获取角色列表 */
export async function list(args: {
    keyword?: string,
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<CommonPage<UmsRole>>> {
  return request({
    method: 'GET',
    url: '/role/list',
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

/** 修改角色状态 */
export async function updateStatus(args: {
    id: number,
    status?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/role/updateStatus/${args.id}`,
    data: {
      status: args.status,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取角色相关菜单 */
export async function listMenu(args: {
    roleId: number,
  }): Promise<CommonResult<Array<UmsMenu>>> {
  return request({
    method: 'GET',
    url: `/role/listMenu/${args.roleId}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取角色相关资源 */
export async function listResource(args: {
    roleId: number,
  }): Promise<CommonResult<Array<UmsResource>>> {
  return request({
    method: 'GET',
    url: `/role/listResource/${args.roleId}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 给角色分配菜单 */
export async function allocMenu(args: {
    roleId?: number,
    menuIds?: Array<number>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/role/allocMenu',
    data: {
      roleId: args.roleId,
      menuIds: args.menuIds,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 给角色分配资源 */
export async function allocResource(args: {
    roleId?: number,
    resourceIds?: Array<number>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/role/allocResource',
    data: {
      roleId: args.roleId,
      resourceIds: args.resourceIds,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
