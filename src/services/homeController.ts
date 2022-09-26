import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { HomeContentResult } from "./model/domain/homeContentResult";
import { PmsProduct } from "./model/model/pmsProduct";
import { PmsProductCategory } from "./model/model/pmsProductCategory";
import { CmsSubject } from "./model/model/cmsSubject";

/** 首页内容信息展示 */
export async function content(): Promise<CommonResult<HomeContentResult>> {
  return request({
    method: 'GET',
    url: '/home/content',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页获取推荐商品 */
export async function recommendProductList(args: {
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<Array<PmsProduct>>> {
  return request({
    method: 'GET',
    url: '/home/recommendProductList',
    params: {
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取首页商品分类 */
export async function getProductCateList(args: {
    parentId: number,
  }): Promise<CommonResult<Array<PmsProductCategory>>> {
  return request({
    method: 'GET',
    url: `/home/productCateList/${args.parentId}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据分类获取专题 */
export async function getSubjectList(args: {
    cateId?: number,
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<Array<CmsSubject>>> {
  return request({
    method: 'GET',
    url: '/home/subjectList',
    params: {
      cateId: args.cateId,
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页获取人气推荐商品 */
export async function hotProductList(args: {
    pageNum?: number,
    pageSize?: number,
  }): Promise<CommonResult<Array<PmsProduct>>> {
  return request({
    method: 'GET',
    url: '/home/hotProductList',
    params: {
      pageNum: args.pageNum,
      pageSize: args.pageSize,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页获取新品推荐商品 */
export async function newProductList(args: {
    pageNum?: number,
    pageSize?: number,
  }): Promise<CommonResult<Array<PmsProduct>>> {
  return request({
    method: 'GET',
    url: '/home/newProductList',
    params: {
      pageNum: args.pageNum,
      pageSize: args.pageSize,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
