import React, { useState, useEffect } from 'react';
import { Button, UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import ApiDoc from './doc';

import mallSchema from './example/mall.json';
import vhrSchema from './example/vhr.json';

import style from './style.less';

interface IState {
  project?: string;
  schema?: any;
}

export default function apiDoc() {
  const [state, setState] = useState<IState>({});

  // 使用 Demo
  const handleShowExpmple = (data: any) => {
    setState({
      ...state,
      schema: data,
    });
  };

  const renderUploader = () => {
    const props: UploadProps = {
      name: 'file',
      multiple: false,
      showUploadList: false,
      beforeUpload(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsText(file);
          reader.onload = () => {
            try {
              const oneApiSchema = JSON.parse(reader.result as string);
              setState({ ...state, schema: oneApiSchema });
              resolve();
            } catch {
              message.error('文件格式错误，请重新选择');
              reject();
            }
          };
        });
      },
    };

    return (
      <div className={style.uploader}>
        <Upload.Dragger {...props}>
          <InboxOutlined />
          <h5>点击上传 oneapi.json 文件</h5>
          <p>文件不会被保存到服务端，如需共享 API 文档请参考使用文档</p>
        </Upload.Dragger>
        <div className={style.example}>
          <span>开源项目示例：</span>
          <Button type="link" onClick={() => handleShowExpmple(mallSchema)}>
            mall 电商系统
          </Button>
          <Button type="link" onClick={() => handleShowExpmple(vhrSchema)}>
            vhr 微人事
          </Button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const defaultSchema = (window as any).defaultJsonSchema;
    if (defaultSchema) {
      try {
        setState({
          ...state,
          schema: defaultSchema,
        });
      } catch (e) {
        console.log('>>>>> e: ', e);
      }
    }
  }, []);

  return (
    <>
      {state.schema ? (
        <ApiDoc app={state.schema.oneapi?.app} schema={state.schema.http} />
      ) : (
        renderUploader()
      )}
    </>
  );
}
