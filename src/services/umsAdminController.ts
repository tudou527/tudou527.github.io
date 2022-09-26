import request from "@/utils/request";
import { UmsAdminParam } from "./model/dto/umsAdminParam";
import { CommonResult } from "./model/api/commonResult";
import { UmsAdmin } from "./model/model/umsAdmin";
import { UmsAdminLoginParam } from "./model/dto/umsAdminLoginParam";
import { Principal } from "./model/security/principal";
import { CommonPage } from "./model/api/commonPage";
import { UpdateAdminPasswordParam } from "./model/dto/updateAdminPasswordParam";
import { UmsRole } from "./model/model/umsRole";

/** 用户注册 */
export async function register(args: {
    umsAdminParam?: UmsAdminParam,
  }): Promise<CommonResult<UmsAdmin>> {
  return request({
    method: 'POST',
    url: '/admin/register',
    data: {
      umsAdminParam: args.umsAdminParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 登录以后返回token */
export async function login(args: {
    umsAdminLoginParam?: UmsAdminLoginParam,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/admin/login',
    data: {
      umsAdminLoginParam: args.umsAdminLoginParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 刷新token */
export async function refreshToken(): Promise<CommonResult> {
  return request({
    method: 'GET',
    url: '/admin/refreshToken',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取当前登录用户信息 */
export async function getAdminInfo(args: {
    principal?: Principal,
  }): Promise<CommonResult> {
  return request({
    method: 'GET',
    url: '/admin/info',
    params: {
      principal: args.principal,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 登出功能 */
export async function logout(): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/admin/logout',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据用户名或姓名分页获取用户列表 */
export async function list(args: {
    keyword?: string,
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<CommonPage<UmsAdmin>>> {
  return request({
    method: 'GET',
    url: '/admin/list',
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

/** 获取指定用户信息 */
export async function getItem(args: {
    id: number,
  }): Promise<CommonResult<UmsAdmin>> {
  return request({
    method: 'GET',
    url: `/admin/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改指定用户信息 */
export async function update(args: {
    id: number,
    admin?: UmsAdmin,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/admin/update/${args.id}`,
    data: {
      admin: args.admin,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改指定用户密码 */
export async function updatePassword(args: {
    updatePasswordParam?: UpdateAdminPasswordParam,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/admin/updatePassword',
    data: {
      updatePasswordParam: args.updatePasswordParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 删除指定用户信息 */
export async function deleteController(args: {
    id: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/admin/delete/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改帐号状态 */
export async function updateStatus(args: {
    id: number,
    status?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/admin/updateStatus/${args.id}`,
    data: {
      status: args.status,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 给用户分配角色 */
export async function updateRole(args: {
    adminId?: number,
    roleIds?: Array<number>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/admin/role/update',
    data: {
      adminId: args.adminId,
      roleIds: args.roleIds,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取指定用户的角色 */
export async function getRoleList(args: {
    adminId: number,
  }): Promise<CommonResult<Array<UmsRole>>> {
  return request({
    method: 'GET',
    url: `/admin/role/${args.adminId}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
