import request from "@/utils/request";
import { PmsProductCategoryParam } from "./model/dto/pmsProductCategoryParam";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";
import { PmsProductCategory } from "./model/model/pmsProductCategory";
import { PmsProductCategoryWithChildrenItem } from "./model/dto/pmsProductCategoryWithChildrenItem";

/** 添加商品分类 */
export async function create(args: {
    productCategoryParam?: PmsProductCategoryParam,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/productCategory/create',
    data: {
      productCategoryParam: args.productCategoryParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改商品分类 */
export async function update(args: {
    id: number,
    productCategoryParam?: PmsProductCategoryParam,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/productCategory/update/${args.id}`,
    data: {
      productCategoryParam: args.productCategoryParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页查询商品分类 */
export async function getList(args: {
    parentId: number,
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<CommonPage<PmsProductCategory>>> {
  return request({
    method: 'GET',
    url: `/productCategory/list/${args.parentId}`,
    params: {
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据id获取商品分类 */
export async function getItem(args: {
    id: number,
  }): Promise<CommonResult<PmsProductCategory>> {
  return request({
    method: 'GET',
    url: `/productCategory/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 删除商品分类 */
export async function deleteController(args: {
    id: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/productCategory/delete/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改导航栏显示状态 */
export async function updateNavStatus(args: {
    ids?: Array<number>,
    navStatus?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/productCategory/update/navStatus',
    data: {
      ids: args.ids,
      navStatus: args.navStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改显示状态 */
export async function updateShowStatus(args: {
    ids?: Array<number>,
    showStatus?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/productCategory/update/showStatus',
    data: {
      ids: args.ids,
      showStatus: args.showStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 查询所有一级分类及子分类 */
export async function listWithChildren(): Promise<CommonResult<Array<PmsProductCategoryWithChildrenItem>>> {
  return request({
    method: 'GET',
    url: '/productCategory/list/withChildren',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
