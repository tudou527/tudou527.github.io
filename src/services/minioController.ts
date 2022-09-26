import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";

/** 文件上传 */
export async function upload(args: {
    file?: any,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/minio/upload',
    data: {
      file: args.file,
    },
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

/** 文件删除 */
export async function deleteController(args: {
    objectName?: string,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/minio/delete',
    data: {
      objectName: args.objectName,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
