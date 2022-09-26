import request from "@/utils/request";
import { CommonResult } from "./model/api/commonResult";
import { PmsSkuStock } from "./model/model/pmsSkuStock";

/** 根据商品ID及sku编码模糊搜索sku库存 */
export async function getList(args: {
    pid: number,
    keyword?: string,
  }): Promise<CommonResult<Array<PmsSkuStock>>> {
  return request({
    method: 'GET',
    url: `/sku/${args.pid}`,
    params: {
      keyword: args.keyword,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 批量更新sku库存信息 */
export async function update(args: {
    pid: number,
    skuStockList?: Array<PmsSkuStock>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: `/sku/update/${args.pid}`,
    data: {
      skuStockList: args.skuStockList,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
