/**
 * 获取OSS上传文件授权返回结果
 * Created by macro on 2018/5/17.
 */
export interface OssPolicyResult {
  /** 访问身份验证中用到用户标识 */
  accessKeyId: string;
  /** 用户表单上传的策略,经过base64编码过的字符串 */
  policy: string;
  /** 对policy签名后的字符串 */
  signature: string;
  /** 上传文件夹路径前缀 */
  dir: string;
  /** oss对外服务的访问域名 */
  host: string;
  /** 上传成功后的回调设置 */
  callback: string;
}
