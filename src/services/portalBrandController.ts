import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { PmsBrand } from "./model/model/pmsBrand";
import { CommonPage } from "./model/api/commonPage";
import { PmsProduct } from "./model/model/pmsProduct";

/** 分页获取推荐品牌 */
export async function recommendList(args: {
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<Array<PmsBrand>>> {
  return request({
    method: 'GET',
    url: '/brand/recommendList',
    params: {
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取品牌详情 */
export async function detail(args: {
    brandId: number,
  }): Promise<CommonResult<PmsBrand>> {
  return request({
    method: 'GET',
    url: `/brand/detail/${args.brandId}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页获取品牌相关商品 */
export async function productList(args: {
    brandId?: number,
    pageNum?: number,
    pageSize?: number,
  }): Promise<CommonResult<CommonPage<PmsProduct>>> {
  return request({
    method: 'GET',
    url: '/brand/productList',
    params: {
      brandId: args.brandId,
      pageNum: args.pageNum,
      pageSize: args.pageSize,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
