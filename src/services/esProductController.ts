// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
import request from '@/service/config'
import { CommonResult } from "./model/api/commonResult";
import { EsProduct } from "./model/domain/esProduct";
import { CommonPage } from "./model/api/commonPage";
import { EsProductRelatedInfo } from "./model/domain/esProductRelatedInfo";

/** 导入所有数据库中商品到ES */
export async function importAllList() {
  return request<CommonResult<number>>({
    method: 'POST',
    url: '/esProduct/importAll',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据id删除商品（由于 EsProductController 中 delete 方法重复，此处已自动重命名为 deleteIdWithGet) */
export async function deleteIdWithGet(args: {
    id: number,
  }) {
  return request<CommonResult<any>>({
    method: 'GET',
    url: `/esProduct/delete/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据id批量删除商品（由于 EsProductController 中 delete 方法重复，此处已自动重命名为 deleteBatchWithPost) */
export async function deleteBatchWithPost(args: {
    ids?: Array<number>,
  }) {
  return request<CommonResult<any>>({
    method: 'POST',
    url: '/esProduct/delete/batch',
    data: {
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据id创建商品 */
export async function create(args: {
    id: number,
  }) {
  return request<CommonResult<EsProduct>>({
    method: 'POST',
    url: `/esProduct/create/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 简单搜索（由于 EsProductController 中 search 方法重复，此处已自动重命名为 searchSimpleWithGet) */
export async function searchSimpleWithGet(args: {
    keyword?: string,
    pageNum?: number,
    pageSize?: number,
  }) {
  return request<CommonResult<CommonPage<EsProduct>>>({
    method: 'GET',
    url: '/esProduct/search/simple',
    params: {
      keyword: args.keyword,
      pageNum: args.pageNum,
      pageSize: args.pageSize,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 综合搜索、筛选、排序（由于 EsProductController 中 search 方法重复，此处已自动重命名为 esProductSearchWithGet) */
export async function esProductSearchWithGet(args: {
    keyword?: string,
    brandId?: number,
    productCategoryId?: number,
    pageNum?: number,
    pageSize?: number,
    sort?: number,
  }) {
  return request<CommonResult<CommonPage<EsProduct>>>({
    method: 'GET',
    url: '/esProduct/search',
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

/** 根据商品id推荐商品 */
export async function recommend(args: {
    id: number,
    pageNum?: number,
    pageSize?: number,
  }) {
  return request<CommonResult<CommonPage<EsProduct>>>({
    method: 'GET',
    url: `/esProduct/recommend/${args.id}`,
    params: {
      pageNum: args.pageNum,
      pageSize: args.pageSize,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取搜索的相关品牌、分类及筛选属性 */
export async function searchRelatedInfo(args: {
    keyword?: string,
  }) {
  return request<CommonResult<EsProductRelatedInfo>>({
    method: 'GET',
    url: '/esProduct/search/relate',
    params: {
      keyword: args.keyword,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
