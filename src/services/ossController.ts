// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import request from '@/service/config'
import { CommonResult } from "./model/api/commonResult";
import { OssPolicyResult } from "./model/dto/ossPolicyResult";
import { OssCallbackResult } from "./model/dto/ossCallbackResult";

/** Oss上传签名生成 */
export async function policy() {
  return request<CommonResult<OssPolicyResult>>({
    method: 'GET',
    url: '/aliyun/oss/policy',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** Oss上传签名生成 */
export async function policy() {
  return request<CommonResult<OssPolicyResult>>({
    method: 'GET',
    url: '/ali/oss/policy',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** Oss上传成功回调 */
export async function callback() {
  return request<CommonResult<OssCallbackResult>>({
    method: 'POST',
    url: '/aliyun/oss/callback',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** Oss上传成功回调 */
export async function callback() {
  return request<CommonResult<OssCallbackResult>>({
    method: 'POST',
    url: '/aliyun/oss/callback-success',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** Oss上传成功回调 */
export async function callback() {
  return request<CommonResult<OssCallbackResult>>({
    method: 'POST',
    url: '/ali/oss/callback',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** Oss上传成功回调 */
export async function callback() {
  return request<CommonResult<OssCallbackResult>>({
    method: 'POST',
    url: '/ali/oss/callback-success',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
