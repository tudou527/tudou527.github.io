import request from "@/utils/request";
import { OmsCartItem } from "./model/model/omsCartItem";
import { CommonResult } from "./model/api/commonResult";
import { CartPromotionItem } from "./model/domain/cartPromotionItem";
import { CartProduct } from "./model/domain/cartProduct";

/** 添加商品到购物车 */
export async function add(args: {
    cartItem?: OmsCartItem,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/cart/add',
    data: {
      cartItem: args.cartItem,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取当前会员的购物车列表 */
export async function list(): Promise<CommonResult<Array<OmsCartItem>>> {
  return request({
    method: 'GET',
    url: '/cart/list',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取当前会员的购物车列表,包括促销信息 */
export async function listPromotion(args: {
    cartIds?: Array<number>,
  }): Promise<CommonResult<Array<CartPromotionItem>>> {
  return request({
    method: 'GET',
    url: '/cart/list/promotion',
    params: {
      cartIds: args.cartIds,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改购物车中指定商品的数量 */
export async function updateQuantity(args: {
    id?: number,
    quantity?: number,
  }): Promise<CommonResult> {
  return request({
    method: 'GET',
    url: '/cart/update/quantity',
    params: {
      id: args.id,
      quantity: args.quantity,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 获取购物车中指定商品的规格,用于重选规格 */
export async function getCartProduct(args: {
    productId: number,
  }): Promise<CommonResult<CartProduct>> {
  return request({
    method: 'GET',
    url: `/cart/getProduct/${args.productId}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 修改购物车中商品的规格 */
export async function updateAttr(args: {
    cartItem?: OmsCartItem,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/cart/update/attr',
    data: {
      cartItem: args.cartItem,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 删除购物车中的指定商品 */
export async function deleteController(args: {
    ids?: Array<number>,
  }): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/cart/delete',
    data: {
      ids: args.ids,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 清空当前会员的购物车 */
export async function clear(): Promise<CommonResult> {
  return request({
    method: 'POST',
    url: '/cart/clear',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
