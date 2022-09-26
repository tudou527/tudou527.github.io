import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { PmsProductAttributeCategory } from "./model/model/pmsProductAttributeCategory";
import { CommonPage } from "./model/api/commonPage";
import { PmsProductAttributeCategoryItem } from "./model/dto/pmsProductAttributeCategoryItem";

/** 添加商品属性分类 */
export async function create(args: {
    name?: string,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/productAttribute/category/create',
    data: {
      name: args.name,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改商品属性分类 */
export async function update(args: {
    id: number,
    name?: string,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/productAttribute/category/update/${args.id}`,
    data: {
      name: args.name,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 删除单个商品属性分类 */
export async function deleteController(args: {
    id: number,
  }): Promise<CommonResult> {
  return request({
    method: 'GET',
    url: `/productAttribute/category/delete/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取单个商品属性分类信息 */
export async function getItem(args: {
    id: number,
  }): Promise<CommonResult<PmsProductAttributeCategory>> {
  return request({
    method: 'GET',
    url: `/productAttribute/category/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页获取所有商品属性分类 */
export async function getList(args: {
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<CommonPage<PmsProductAttributeCategory>>> {
  return request({
    method: 'GET',
    url: '/productAttribute/category/list',
    params: {
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取所有商品属性分类及其下属性 */
export async function getListWithAttr(): Promise<CommonResult<Array<PmsProductAttributeCategoryItem>>> {
  return request({
    method: 'GET',
    url: '/productAttribute/category/list/withAttr',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
