import request from "@/utils/request";
import { PmsProductParam } from "./model/dto/pmsProductParam";
import { CommonResult } from "./model/api/commonResult";
import { PmsProductResult } from "./model/dto/pmsProductResult";
import { PmsProductQueryParam } from "./model/dto/pmsProductQueryParam";
import { CommonPage } from "./model/api/commonPage";
import { PmsProduct } from "./model/model/pmsProduct";

/** 创建商品 */
export async function create(args: {
    productParam?: PmsProductParam,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/product/create',
    data: {
      productParam: args.productParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据商品id获取商品编辑信息 */
export async function getUpdateInfo(args: {
    id: number,
  }): Promise<CommonResult<PmsProductResult>> {
  return request({
    method: 'GET',
    url: `/product/updateInfo/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 更新商品 */
export async function update(args: {
    id: number,
    productParam?: PmsProductParam,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/product/update/${args.id}`,
    data: {
      productParam: args.productParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 查询商品（由于 PmsProductController 中 getList 方法重复，此处已自动重命名为 productListWithGet) */
export async function productListWithGet(args: {
    productQueryParam?: PmsProductQueryParam,
    pageSize?: number,
    pageNum?: number,
  }): Promise<CommonResult<CommonPage<PmsProduct>>> {
  return request({
    method: 'GET',
    url: '/product/list',
    params: {
      productQueryParam: args.productQueryParam,
      pageSize: args.pageSize,
      pageNum: args.pageNum,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据商品名称或货号模糊查询（由于 PmsProductController 中 getList 方法重复，此处已自动重命名为 productSimpleListWithGet) */
export async function productSimpleListWithGet(args: {
    keyword?: string,
  }): Promise<CommonResult<Array<PmsProduct>>> {
  return request({
    method: 'GET',
    url: '/product/simpleList',
    params: {
      keyword: args.keyword,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量修改审核状态 */
export async function updateVerifyStatus(args: {
    ids?: Array<number>,
    verifyStatus?: number,
    detail?: string,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/product/update/verifyStatus',
    data: {
      ids: args.ids,
      verifyStatus: args.verifyStatus,
      detail: args.detail,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量上下架商品 */
export async function updatePublishStatus(args: {
    ids?: Array<number>,
    publishStatus?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/product/update/publishStatus',
    data: {
      ids: args.ids,
      publishStatus: args.publishStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量推荐商品 */
export async function updateRecommendStatus(args: {
    ids?: Array<number>,
    recommendStatus?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/product/update/recommendStatus',
    data: {
      ids: args.ids,
      recommendStatus: args.recommendStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量设为新品 */
export async function updateNewStatus(args: {
    ids?: Array<number>,
    newStatus?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/product/update/newStatus',
    data: {
      ids: args.ids,
      newStatus: args.newStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量修改删除状态 */
export async function updateDeleteStatus(args: {
    ids?: Array<number>,
    deleteStatus?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/product/update/deleteStatus',
    data: {
      ids: args.ids,
      deleteStatus: args.deleteStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
