import React, { useEffect, useRef, useState } from 'react';
import { Switch } from 'antd';
import { RightOutlined } from '@ant-design/icons';
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
    highlightCode: false,
  });
  const castRef = useRef<any>();
  const playerRef = useRef<any>(null);

  const handleChangeMode = (checked: boolean) => {
    const player = playerRef.current!;
    if (checked) {
      player.pause();
    }

    setState({ ...state, showAll: checked });
  };

  useEffect(() => {
    if (castRef.current) {
      setState({
        ...state,
        highlightCode: true,
      });

      import('asciinema-player').then((asciinemaPlayer) => {
        playerRef.current = asciinemaPlayer.create({ data: oneApiCast }, castRef.current, {
          rows: 30,
          cols: 108,
          fit: 'none',
          autoPlay: true,
          poster: 'npt:00:00:09',
        });
      });
    }
  }, []);

  return (
    <div className={style.home}>
      <div className={style.banner}>
        <div className={style.desc}>
          <h3>OneAPI</h3>
          <p>
            一个能 💯 替代 Swagger/SpringFox 的 API 生产工具，既不需要修改后端代码，也不需要启动应用
          </p>
          <div className={style.action}>
            <a href="/usage">
              查看文档
              <RightOutlined />
            </a>
          </div>
          <div className={style.termDemo}>
            <div
              className={`${style.castPlayer} ${!state.showAll ? style.active : ''}`}
              ref={castRef}
            />
            <div className={`${style.terminal} ${state.showAll ? style.active : ''}`}>
              <div className={style.terminalContainer}>
                {state.highlightCode ? (
                  <Highlight
                    {...defaultProps}
                    theme={dracula}
                    code={oneApiTerminalStr}
                    language="bash"
                  >
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
                ) : null}
              </div>
            </div>
            {state.highlightCode ? (
              <div className={style.switch}>
                切换终端输出结果{' '}
                <Switch onChange={handleChangeMode} size="small" checked={state.showAll} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className={style.feature}>
        <div className={style.featCard}>
          <img src={featZero} alt="零接入成本" />
          <h3>零接入成本</h3>
          <p>基于 AST 识别项目中符合规范的 API，既不需要修改后端代码，也不需要启动应用</p>
        </div>
        <div className={style.featCard}>
          <img src={featJavaDoc} alt="代码即文档" />
          <h3>代码即文档</h3>
          <p>自动识别方法&字段中定义的 JavaDoc 作为 API 文档的描述信息（兼容 Swagger 注解）</p>
        </div>
        <div className={style.featCard}>
          <img src={featProduction} alt="专注 API 生产" />
          <h3>专注 API 生产</h3>
          <p>
            与业界其他工具相比，OneAPI 专注于 API 生产，也支持导出 OpenAPI
            协议格式数据，方便在其他工具中消费
          </p>
        </div>
        <div className={style.featCard}>
          <img src={featExtension} alt="易扩展" />
          <h3>易扩展</h3>
          <p>除 RESTFul API 外，可以通过 Node 来扩展识别企业内部自定义协议，如 RPC、GraphQL 等</p>
        </div>
      </div>
    </div>
  );
}
