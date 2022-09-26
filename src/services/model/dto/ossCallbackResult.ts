/**
 * OSS上传文件的回调结果
 * Created by macro on 2018/5/17.
 */
export interface OssCallbackResult {
  /** 文件名称 */
  filename: string;
  /** 文件大小 */
  size: string;
  /** 文件的mimeType */
  mimeType: string;
  /** 图片文件的宽 */
  width: string;
  /** 图片文件的高 */
  height: string;
}
