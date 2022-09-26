import request from "@/utils/request";
import { PmsBrand } from "./model/model/pmsBrand";

/** getForEntity url */
export async function getForEntity(args: {
    id: number,
  }): Promise<any> {
  return request({
    method: 'GET',
    url: `/template/get/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** getForEntity params */
export async function getForEntity2(args: {
    id: number,
  }): Promise<any> {
  return request({
    method: 'GET',
    url: `/template/get2/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** getForEntity Uri */
export async function getForEntity3(args: {
    id: number,
  }): Promise<any> {
  return request({
    method: 'GET',
    url: `/template/get3/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** getForObject url */
export async function getForObject(args: {
    id: number,
  }): Promise<any> {
  return request({
    method: 'GET',
    url: `/template/get4/${args.id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** postForEntity jsonBody */
export async function postForEntity(args: {
    brand?: PmsBrand,
  }): Promise<any> {
  return request({
    method: 'POST',
    url: '/template/post',
    data: {
      brand: args.brand,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** postForEntity jsonBody */
export async function postForObject(args: {
    brand?: PmsBrand,
  }): Promise<any> {
  return request({
    method: 'POST',
    url: '/template/post2',
    data: {
      brand: args.brand,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** postForEntity form */
export async function postForEntity3(args: {
    name?: string,
  }): Promise<any> {
  return request({
    method: 'POST',
    url: '/template/post3',
    data: {
      name: args.name,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
