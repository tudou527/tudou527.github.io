// 此文件由 oneapi-cli 自动生成，请不要编辑（This file is auto-generated by oneapi-cli, Please do not edit it）
/** */
export interface UmsMemberReceiveAddress {
  /** */
  id: number;
  /** */
  memberId: number;
  /** 收货人名称 */
  name: string;
  /** */
  phoneNumber: string;
  /** 是否为默认 */
  defaultStatus: number;
  /** 邮政编码 */
  postCode: string;
  /** 省份/直辖市 */
  province: string;
  /** 城市 */
  city: string;
  /** 区 */
  region: string;
  /** 详细地址(街道) */
  detailAddress: string;
}
