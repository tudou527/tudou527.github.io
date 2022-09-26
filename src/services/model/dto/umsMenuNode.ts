import { UmsMenu } from "../model/umsMenu";

/**
 * 后台菜单节点封装
 * Created by macro on 2020/2/4.
 */
export interface UmsMenuNode extends UmsMenu {
  /** 子级菜单 */
  children: Array<UmsMenuNode>;
}
