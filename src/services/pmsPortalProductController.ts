import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { CommonPage } from "./model/api/commonPage";
import { PmsProduct } from "./model/model/pmsProduct";
import { PmsProductCategoryNode } from "./model/domain/pmsProductCategoryNode";
import { PmsPortalProductDetail } from "./model/domain/pmsPortalProductDetail";

/** 综合搜索、筛选、排序 */
export async function search(args: {
    keyword?: string,
    brandId?: number,
    productCategoryId?: number,
    pageNum?: number,
    pageSize?: number,
    sort?: number,
  }): Promise<CommonResult<CommonPage<PmsProduct>>> {
  return request({
    method: 'GET',
    url: '/product/search',
    params: {
      keyword: args.keyword,
      brandId: args.brandId,
      productCategoryId: args.productCategoryId,
      pageNum: args.pageNum,
      pageSize: args.pageSize,
      sort: args.sort,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 以树形结构获取所有商品分类 */
export async function categoryTreeList(): Promise<CommonResult<Array<PmsProductCategoryNode>>> {
  return request({
    method: 'GET',
    url: '/product/categoryTreeList',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取前台商品详情 */
export async function detail(args: {
    id: number,
  }): Promise<CommonResult<PmsPortalProductDetail>> {
  return request({
    method: 'GET',
    url: `/product/detail/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
