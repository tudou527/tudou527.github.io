import React, { useEffect, useRef, useState } from 'react';
import { Button, Switch } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import * as AsciinemaPlayer from 'asciinema-player';
import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/vsDark';

import { oneApiCast, oneApiTerminalStr } from './oneapi-cast';
import featZero from '../assets/feat-zero.png';
import featJavaDoc from '../assets/feat-javadoc.png';
import featExtension from '../assets/feat-extension.png';
import featProduction from '../assets/feat-production.png';

import 'asciinema-player/dist/bundle/asciinema-player.css';
import style from './style.less';

export default function Home() {
  const [state, setState] = useState({
    showAll: false,
  });
  const castRef = useRef<any>();
  const playerRef = useRef<any>(null);

  const handleChangeMode = (checked: boolean) => {
    const player = playerRef.current!;
    if (checked) {
      player.pause();
    }

    setState({ showAll: checked });
  };

  useEffect(() => {
    playerRef.current = AsciinemaPlayer.create({ data: oneApiCast }, castRef.current!, {
      rows: 30,
      cols: 108,
      fit: 'none',
      poster: 'npt:00:00:09',
    });
  }, []);

  return (
    <div className={style.home}>
      <div className={style.banner}>
        <div className={style.desc}>
          <h3>OneAPI</h3>
          <p>一个 API 生产工具，根据 Java 代码生成 API，既不需要修改后端代码，也不需要启动应用</p>
          <div className={style.action}>
            <a href="/usage">
              查看文档
              <RightOutlined />
            </a>
          </div>
        </div>
        <div className={style.termDemo}>
          <div
            className={`${style.castPlayer} ${!state.showAll ? style.active : ''}`}
            ref={castRef}
          />
          <div className={`${style.terminal} ${state.showAll ? style.active : ''}`}>
            <Highlight {...defaultProps} theme={dracula} code={oneApiTerminalStr} language="bash">
              {({ className, style, tokens, getLineProps, getTokenProps }: any) => (
                <pre className={className} style={style}>
                  {tokens.map((line: any, i: any) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token: any, key: any) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
          <div className={style.switch}>
            切换终端输出结果{' '}
            <Switch onChange={handleChangeMode} size="small" checked={state.showAll} />
          </div>
        </div>
      </div>
      <div className={style.feature}>
        <div className={style.featCard}>
          <img src={featProduction} />
          <h3>专注 API 生产</h3>
          <p>
            与业界其他工具相比，OneAPI 专注于 API 生产，也支持导出 OpenAPI
            协议格式数据，方便在其他工具中消费
          </p>
        </div>
        <div className={style.featCard}>
          <img src={featZero} />
          <h3>零接入成本</h3>
          <p>
            OneAPI 使用 AST 识别项目中符合 Spring 规范的
            API，对后端代码没有任何修改成本，也不需要启动应用
          </p>
        </div>
        <div className={style.featCard}>
          <img src={featJavaDoc} />
          <h3>支持 JavaDoc</h3>
          <p>
            OneAPI 会自动识别方法&字段中定义的 JavaDoc 作为注释内容，同时也兼容部分 Swagger 注解
          </p>
        </div>
        <div className={style.featCard}>
          <img src={featExtension} />
          <h3>可扩展</h3>
          <p>除 RESTful API 外，OneAPI 也能通过扩展的方式识别企业内部自定义协议，如 RPC 等</p>
        </div>
      </div>
    </div>
  );
}
