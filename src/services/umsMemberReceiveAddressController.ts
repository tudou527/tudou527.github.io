import request from "@/utils/request";
import { UmsMemberReceiveAddress } from "./model/model/umsMemberReceiveAddress";
import { CommonResult } from "./model/api/commonResult";

/** 添加收货地址 */
export async function add(args: {
    address?: UmsMemberReceiveAddress,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/member/address/add',
    data: {
      address: args.address,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 删除收货地址 */
export async function deleteController(args: {
    id: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/member/address/delete/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改收货地址 */
export async function update(args: {
    id: number,
    address?: UmsMemberReceiveAddress,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/member/address/update/${args.id}`,
    data: {
      address: args.address,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 显示所有收货地址 */
export async function list(): Promise<CommonResult<Array<UmsMemberReceiveAddress>>> {
  return request({
    method: 'GET',
    url: '/member/address/list',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取收货地址详情 */
export async function getItem(args: {
    id: number,
  }): Promise<CommonResult<UmsMemberReceiveAddress>> {
  return request({
    method: 'GET',
    url: `/member/address/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
