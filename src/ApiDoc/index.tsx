import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Table, Tag } from 'antd';
import {
  FileTextOutlined,
  GlobalOutlined,
  LinkOutlined,
  NumberOutlined,
  TagOutlined,
} from '@ant-design/icons';

import { getSchemaData, getTypeReference } from './utils';

import style from './style.less';

interface IProps {
  project: string;
  schema: any[];
}
interface IState {
  tab: 'api' | 'model';
  selectApi: string;
  selectModel: string;
}

export default function ApiDoc(props: IProps) {
  const { project, schema } = props;
  const modelRef = useRef<any>();
  const { apiList, modelList } = getSchemaData(schema);
  const [state, setState] = useState<IState>({
    tab: 'api',
    selectApi: apiList[0].classPath,
    selectModel: modelList[0].classPath,
  });

  // 转换类型
  const convertType = (type: any) => {
    const resData = getTypeReference(type, schema);

    return (
      <>
        {resData.map((data, index: number) => (
          <span key={index}>
            {data.link ? (
              <a href={`#${data.link}`} onClick={() => handleSwitchModel(data.link)}>
                {data.text}
              </a>
            ) : (
              <span>{data.text}</span>
            )}
            {index + 1 < resData.length ? <>&lt;</> : null}
          </span>
        ))}
        {new Array(resData.length - 1).fill('').map((_: any, index: number) => (
          <span key={index}>&gt;</span>
        ))}
      </>
    );
  };

  // 切换 API
  const handleSwitchApi = (classPath: string | null) => {
    const activeApi = schema.find((m: any) => m.classPath === classPath);

    if (activeApi) {
      setState({
        ...state,
        tab: 'api',
        selectApi: activeApi.classPath,
      });
    }
  };

  // 切换到模型
  const handleSwitchModel = (classPath: string | null) => {
    const activeModel = schema.find((m: any) => m.classPath === classPath);

    if (activeModel) {
      setState({
        ...state,
        tab: 'model',
        selectModel: activeModel.classPath,
      });
    }
  };

  // 文档
  const renderApiDoc = () => {
    const apiSchema = schema.find((s: any) => s.classPath === state.selectApi);

    if (!apiSchema) {
      return null;
    }

    const columns = [
      {
        title: '参数',
        dataIndex: 'name',
      },
      {
        title: '参数来源',
        dataIndex: 'in',
        render: (_val: boolean, rec: any) => {
          if (rec.method === 'POST') {
            return 'body';
          }
          if (rec.isPathVariable) {
            return 'params';
          }

          return 'QueryParams';
        },
      },
      {
        title: '是否必须',
        width: 150,
        dataIndex: 'isRequired',
        render: (val: boolean) => (val ? '是' : '否'),
      },
      {
        title: '类型',
        dataIndex: 'jsType',
        render: (_val: boolean, rec: { type: any }) => {
          return convertType(rec.type);
        },
      },
    ];

    return (
      <>
        {apiSchema.services?.map((service: any, index: number) => {
          const { type, url, operationId, description, parameter, response } = service;

          return (
            <div key={index} className={style.card}>
              <div className={style.cardTitle}>
                <Tag color={type === 'GET' ? '#108ee9' : '#f50'}>{type}</Tag>
                {url}
              </div>
              <div className={style.desc}>{description.description}</div>
              <div className={style.content}>
                <div className={style.contentItem}>
                  <h4>返回值</h4>
                  <span>{convertType(response.type)}</span>
                </div>
                <div className={style.contentItem}>
                  <h4>OperationId</h4>
                  <pre>{operationId}</pre>
                </div>
                <div className={style.contentItem}>
                  <h4>参数</h4>
                  <Table
                    bordered
                    size="small"
                    columns={columns}
                    pagination={false}
                    locale={{ emptyText: '无参数' }}
                    dataSource={parameter.map((p: any, index: number) => ({
                      ...p,
                      method: type,
                      key: index,
                    }))}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  // 模型
  const renderModelDoc = () => {
    const modelSchema = schema.find((s: any) => s.classPath === state.selectModel);

    if (!modelSchema) {
      return null;
    }

    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '类型',
        dataIndex: 'jsType',
        render: (_val: boolean, rec: { type: any }) => {
          return convertType(rec.type);
        },
      },
      {
        title: '名称',
        dataIndex: 'description',
        render: (desc: any) => {
          return desc.description;
        },
      },
    ];
    const { classPath, description, fields } = modelSchema;

    return (
      <div className={style.card}>
        <div className={style.cardTitle}>{classPath}</div>
        {description.description && <div className={style.desc}>{description.description}</div>}
        <div className={style.content}>
          <div className={style.contentItem}>
            <h4>字段列表</h4>
            <Table
              bordered
              size="small"
              columns={columns}
              pagination={false}
              locale={{ emptyText: '无字段' }}
              dataSource={(fields || []).map((f: any, index: number) => ({ ...f, key: index }))}
            />
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const { hash } = window.location;

    if (hash) {
      const matchSchema = schema.find((s: any) => s.classPath === hash.slice(1));
      let newState: any = { ...state };
      if (matchSchema) {
        if (matchSchema.fileType === 'api') {
          newState.tab = 'api';
          newState.selectApi = matchSchema.classPath;
        } else {
          newState.tab = 'model';
          newState.selectModel = matchSchema.classPath;
        }
        setState({ ...newState });
      }
    }
  }, []);

  useLayoutEffect(() => {
    if (state.tab === 'model') {
      const activeNode = modelRef.current?.querySelector(`.${style.activeTitle}`);
      if (activeNode) {
        const rect = activeNode.getBoundingClientRect();
        const parent = activeNode.parentNode.getBoundingClientRect();

        if (rect.top > parent.top + parent.height || rect.top < parent.top) {
          activeNode.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [state.selectModel]);

  return (
    <div className={style.apiDoc}>
      <div className={style.menu}>
        <div className={style.apiTab}>
          <div className={style.tabHead}>
            <span
              onClick={() => setState({ ...state, tab: 'api' })}
              className={state.tab === 'api' ? style.activeTab : null}
            >
              API
            </span>
            <span
              onClick={() => setState({ ...state, tab: 'model' })}
              className={state.tab === 'model' ? style.activeTab : null}
            >
              Model
            </span>
          </div>
          <div className={style.tabBody}>
            <div
              className={`${style.tabContent} ${state.tab === 'api' ? style.activeContent : ''}`}
            >
              {apiList.map((data) => (
                <a
                  key={data.classPath}
                  href={`#${data.classPath}`}
                  onClick={() => handleSwitchApi(data.classPath)}
                  className={`${style.foldTitle} ${
                    state.selectApi === data.classPath ? style.activeTitle : ''
                  }`}
                >
                  <FileTextOutlined />
                  <h3>{data.title}</h3>
                  {data.desc ? <p>{data.desc}</p> : null}
                </a>
              ))}
            </div>
            <div
              ref={modelRef}
              className={`${style.tabContent} ${state.tab === 'model' ? style.activeContent : ''}`}
            >
              {modelList.map((data) => (
                <a
                  key={data.classPath}
                  href={`#${data.classPath}`}
                  onClick={() => handleSwitchModel(data.classPath)}
                  className={`${style.foldTitle} ${
                    state.selectModel === data.classPath ? style.activeTitle : ''
                  }`}
                >
                  <TagOutlined />
                  <h3>{data.title}</h3>
                  {data.desc ? <p>{data.desc}</p> : null}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.projectHead}>
          <NumberOutlined /> GitHub：
          <a href={`https://github.com/${project}`} target="_blank">
            {project}
          </a>
        </div>
        {state.tab === 'api' ? renderApiDoc() : renderModelDoc()}
      </div>
    </div>
  );
}
