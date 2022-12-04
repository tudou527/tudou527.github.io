// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import request from '@/service/config'
import { CommonResult } from "./model/api/commonResult";
import { Principal } from "./model/security/principal";

/** 会员注册 */
export async function register(args: {
    username?: string,
    password?: string,
    telephone?: string,
    authCode?: string,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: '/sso/register',
    data: {
      username: args.username,
      password: args.password,
      telephone: args.telephone,
      authCode: args.authCode,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 会员登录 */
export async function login(args: {
    username?: string,
    password?: string,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: '/sso/login',
    data: {
      username: args.username,
      password: args.password,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取会员信息 */
export async function info(args: {
    principal?: Principal,
  }) {
  return request<CommonResult>({
    method: 'GET',
    url: '/sso/info',
    params: {
      principal: args.principal,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取验证码 */
export async function getAuthCode(args: {
    telephone?: string,
  }) {
  return request<CommonResult>({
    method: 'GET',
    url: '/sso/getAuthCode',
    params: {
      telephone: args.telephone,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 会员修改密码 */
export async function updatePassword(args: {
    telephone?: string,
    password?: string,
    authCode?: string,
  }) {
  return request<CommonResult>({
    method: 'POST',
    url: '/sso/updatePassword',
    data: {
      telephone: args.telephone,
      password: args.password,
      authCode: args.authCode,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 刷新token */
export async function refreshToken() {
  return request<CommonResult>({
    method: 'GET',
    url: '/sso/refreshToken',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
