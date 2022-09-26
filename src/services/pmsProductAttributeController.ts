import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";
import { PmsProductAttribute } from "./model/model/pmsProductAttribute";
import { PmsProductAttributeParam } from "./model/dto/pmsProductAttributeParam";
import { ProductAttrInfo } from "./model/dto/productAttrInfo";

/** 根据分类查询属性列表或参数列表 */
export async function getList(args: {
    cid: number,
    type?: number,
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<CommonPage<PmsProductAttribute>>> {
  return request({
    method: 'GET',
    url: `/productAttribute/list/${args.cid}`,
    params: {
      type: args.type,
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 添加商品属性信息 */
export async function create(args: {
    productAttributeParam?: PmsProductAttributeParam,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/productAttribute/create',
    data: {
      productAttributeParam: args.productAttributeParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改商品属性信息 */
export async function update(args: {
    id: number,
    productAttributeParam?: PmsProductAttributeParam,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/productAttribute/update/${args.id}`,
    data: {
      productAttributeParam: args.productAttributeParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 查询单个商品属性 */
export async function getItem(args: {
    id: number,
  }): Promise<CommonResult<PmsProductAttribute>> {
  return request({
    method: 'GET',
    url: `/productAttribute/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量删除商品属性 */
export async function deleteController(args: {
    ids?: Array<number>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/productAttribute/delete',
    data: {
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据商品分类的id获取商品属性及属性分类 */
export async function getAttrInfo(args: {
    productCategoryId: number,
  }): Promise<CommonResult<Array<ProductAttrInfo>>> {
  return request({
    method: 'GET',
    url: `/productAttribute/attrInfo/${args.productCategoryId}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
