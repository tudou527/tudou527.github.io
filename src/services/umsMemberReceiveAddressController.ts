// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import request from '../utils/request';
import { UmsMemberReceiveAddress } from "./model/model/umsMemberReceiveAddress";
import { CommonResult } from "./model/api/commonResult";

/** 添加收货地址 */
export async function add(args: {
    address?: UmsMemberReceiveAddress,
  }) {
  return request<CommonResult>({
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

/** 删除收货地址（由于 UmsMemberReceiveAddressController 中 delete 方法名为关键字，此处已自动重命名为 deleteController) */
export async function deleteController(args: {
    id: number,
  }) {
  return request<CommonResult>({
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
  }) {
  return request<CommonResult>({
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
export async function list() {
  return request<CommonResult<Array<UmsMemberReceiveAddress>>>({
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
  }) {
  return request<CommonResult<UmsMemberReceiveAddress>>({
    method: 'GET',
    url: `/member/address/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
