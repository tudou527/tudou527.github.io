// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
/** */
export interface OmsCompanyAddress {
  /** */
  id: number;
  /** 地址名称 */
  addressName: string;
  /** 默认发货地址：0->否；1->是 */
  sendStatus: number;
  /** 是否默认收货地址：0->否；1->是 */
  receiveStatus: number;
  /** 收发货人姓名 */
  name: string;
  /** 收货人电话 */
  phone: string;
  /** 省/直辖市 */
  province: string;
  /** 市 */
  city: string;
  /** 区 */
  region: string;
  /** 详细地址 */
  detailAddress: string;
}
