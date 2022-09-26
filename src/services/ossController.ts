import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { OssPolicyResult } from "./model/dto/ossPolicyResult";
import { OssCallbackResult } from "./model/dto/ossCallbackResult";

/** Oss上传签名生成 */
export async function policy(): Promise<CommonResult<OssPolicyResult>> {
  return request({
    method: 'GET',
    url: '/aliyun/oss/policy',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** Oss上传成功回调 */
export async function callback(): Promise<CommonResult<OssCallbackResult>> {
  return request({
    method: 'POST',
    url: '/aliyun/oss/callback',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
