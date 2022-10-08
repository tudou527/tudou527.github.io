import { useEffect, useRef } from 'react';
import { ApiOutlined, GithubOutlined, HolderOutlined, RightOutlined } from '@ant-design/icons';
import * as AsciinemaPlayer from 'asciinema-player';

import { oneApiCast } from './cast.ts';
import banner from '../assets/banner.png';
import featProduction from '../assets/feat-production.png';
import featZero from '../assets/feat-zero.png';
import featJavaDoc from '../assets/feat-javadoc.png';
import featExtension from '../assets/feat-extension.png';

import style from './style.less';
import 'asciinema-player/dist/bundle/asciinema-player.css';

export default function HomePage() {
  const castRef = useRef<any>();

  useEffect(() => {
    const base64Str = window.btoa(unescape(encodeURIComponent(oneApiCast)));
    const player = AsciinemaPlayer.create(
      { data: oneApiCast },
      castRef.current,
    )
    console.log('>>>>> player: ', player);
  }, []);

  return (
    <div className={style.page}>
      <div className={style.header}>
        <h1 className={style.logo}>
          <ApiOutlined />
          OneAPI
        </h1>
        <div className={style.headExt}>
          <ul>
            <li><a href="https://github.com/tudou527/oneapi">文档</a></li>
          </ul>
          <GithubOutlined />
        </div>
      </div>
      <div ref={castRef} />
      <div className={style.body}>
        <div className={style.banner}>
          <div className={style.bg}><img src={banner} /></div>
          <div className={style.desc}>
            <h3>一个 API 生产工具</h3>
            <p>OneAPI 通过 AST 分析 Spring 项目源码<span>（Spring Boot/MVC）</span>生成前端消费所需的 API，提供的 CLI 工具也可以与 Git/SVN Hooks 结合帮助你实现 API 生产自动化。</p>
            <p>相比 Swagger，OneAPI 对后端零接入成本，不需要启动应用。</p>
            <div className={style.action}>
              <a href="https://github.com/tudou527/oneapi">查看文档<RightOutlined /></a>
            </div>
          </div>
        </div>
        <div className={style.feature}>
          <div className={style.title}>
            <HolderOutlined />
            <b>主要特性</b>
            <HolderOutlined />
          </div>
          <div className={style.main}>
            <div className={style.featCard}>
              <img src={featProduction} />
              <h3>专注 API 生产</h3>
              <p>相比业界其他工具，OneAPI 专注于 API 生产，也支持导出 OpenAPI 协议格式数据，方便在其他工具中消费。</p>
            </div>
            <div className={style.featCard}>
              <img src={featZero} />
              <h3>零接入成本</h3>
              <p>OneAPI 使用 AST 识别项目中符合 Spring 规范的 API，对后端代码没有任何修改成本，也不需要启动应用。</p>
            </div>
            <div className={style.featCard}>
              <img src={featJavaDoc} />
              <h3>支持 JavaDoc</h3>
              <p>OneAPI 从源码分析 API 时会自动识别方法、字段中定义的 JavaDoc 作为注释内容，同时也兼容部分 Swagger 注解。</p>
            </div>
            
            <div className={style.featCard}>
              <img src={featExtension} />
              <h3>可扩展</h3>
              <p>AST 机制让 OneAPI 除了能支持 RESTful API 外，也能通过扩展的方式识别企业内部自定义协议，如 RPC 等。</p>
            </div>
          </div>
        </div>
        <div className={style.example}>
          <div className={style.title}>
            <HolderOutlined />
            <b>Services 例子</b>
            <HolderOutlined />
          </div>
          <div className={style.main}>
            {/* <iframe
              src="https://codesandbox.io/embed/oneapi-services-demo-ktyw7i?expanddevtools=1&fontsize=12&module=%2Fsrc%2Fservices%2FhomeController.ts&moduleview=1&theme=dark&view=editor"
              title="OneAPI services demo"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
}
