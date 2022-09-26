import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { PmsBrand } from "./model/model/pmsBrand";
import { PmsBrandDto } from "./model/dto/pmsBrandDto";
import { CommonPage } from "./model/api/commonPage";

/**  "获取全部品牌列表 */
export async function getBrandList(): Promise<CommonResult<Array<PmsBrand>>> {
  return request({
    method: 'GET',
    url: '/brand/listAll',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 添加品牌 */
export async function createBrand(args: {
    pmsBrand?: PmsBrandDto,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/brand/create',
    data: {
      pmsBrand: args.pmsBrand,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 更新品牌 */
export async function updateBrand(args: {
    id: number,
    pmsBrandDto?: PmsBrandDto,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/brand/update/${args.id}`,
    data: {
      pmsBrandDto: args.pmsBrandDto,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 删除品牌 */
export async function deleteBrand(args: {
    id: number,
  }): Promise<CommonResult> {
  return request({
    method: 'GET',
    url: `/brand/delete/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 分页获取品牌列表 */
export async function listBrand(args: {
    pageNum?: number,
    pageSize?: number,
  }): Promise<CommonResult<CommonPage<PmsBrand>>> {
  return request({
    method: 'GET',
    url: '/brand/list',
    params: {
      pageNum: args.pageNum,
      pageSize: args.pageSize,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 根据编号查询品牌信息 */
export async function brand(args: {
    id: number,
  }): Promise<CommonResult<PmsBrand>> {
  return request({
    method: 'GET',
    url: `/brand/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
