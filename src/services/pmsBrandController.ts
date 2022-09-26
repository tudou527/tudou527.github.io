import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { PmsBrand } from "./model/model/pmsBrand";
import { PmsBrandParam } from "./model/dto/pmsBrandParam";
import { CommonPage } from "./model/api/commonPage";

/** 获取全部品牌列表（由于 PmsBrandController 中 getList 方法重复，此处已自动重命名为 brandListAllWithGet) */
export async function brandListAllWithGet(): Promise<CommonResult<Array<PmsBrand>>> {
  return request({
    method: 'GET',
    url: '/brand/listAll',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 添加品牌 */
export async function create(args: {
    pmsBrand?: PmsBrandParam,
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
export async function update(args: {
    id: number,
    pmsBrandParam?: PmsBrandParam,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/brand/update/${args.id}`,
    data: {
      pmsBrandParam: args.pmsBrandParam,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 删除品牌 */
export async function deleteController(args: {
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

/** 根据品牌名称分页获取品牌列表（由于 PmsBrandController 中 getList 方法重复，此处已自动重命名为 brandListWithGet) */
export async function brandListWithGet(args: {
    keyword?: string,
    pageNum?: number,
    pageSize?: number,
  }): Promise<CommonResult<CommonPage<PmsBrand>>> {
  return request({
    method: 'GET',
    url: '/brand/list',
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

/** 根据编号查询品牌信息 */
export async function getItem(args: {
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

/** 批量删除品牌 */
export async function deleteBatch(args: {
    ids?: Array<number>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/brand/delete/batch',
    data: {
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量更新显示状态 */
export async function updateShowStatus(args: {
    ids?: Array<number>,
    showStatus?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/brand/update/showStatus',
    data: {
      ids: args.ids,
      showStatus: args.showStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量更新厂家制造商状态 */
export async function updateFactoryStatus(args: {
    ids?: Array<number>,
    factoryStatus?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/brand/update/factoryStatus',
    data: {
      ids: args.ids,
      factoryStatus: args.factoryStatus,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
