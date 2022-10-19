import { defineConfig } from 'dumi';

const description = '一个根据 Java 代码生成 API 的工具，不需要后端改代码，也不需要启动后端应用';
// more config: https://d.umijs.org/config
export default defineConfig({
  title: 'OneAPI',
  description,
  favicon: 'https://oneapi.app/favicon.svg',
  logo: 'https://oneapi.app/favicon.svg',

  locales: [['zh-CN', '中文']],
  outputPath: 'docs-dist',
  mode: 'site',

  metas: [
    {
      name: 'keywords',
      content:
        'OneAPI, Swagger, SpringFox, API 工具, API 生成器, API 文档生成器, API 文档工具, API 文档生成',
    },
    {
      name: 'description',
      content: description,
    },
  ],

  ssr: {
    devServerRender: false,
  },
  exportStatic: {},

  // 导航配置
  navs: [
    {
      title: '指南',
      path: '/intro',
    },
    {
      title: '文档',
      path: '/usage',
    },
    {
      title: '开源项目示例',
      children: [
        { title: 'mall 电商系统', path: '/example/mall' },
        { title: 'vhr 微人事', path: '/example/vhr' },
      ],
    },
    {
      title: 'GitHub',
      path: 'https://github.com/tudou527/OneAPI',
    },
  ],

  headScripts: [
    `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?2ab9f29877decdfa86413333c724ef0b";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`,
  ],

  // 配置 <body> 里的额外脚本
  scripts: [
    { src: 'https://www.googletagmanager.com/gtag/js?id=G-HL5ZYTV94H', async: true },
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-HL5ZYTV94H');
    `,
  ],

  styles: [
    `
    body {
      -webkit-font-smoothing: antialiased;
    }
    .__dumi-default-navbar-logo {
      padding: 0 0 0 32px !important;
      font-size: 18px !important;
      background-size: 24px 24px !important;
    }
    `,
  ],

  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        style: true,
      },
      'antd',
    ],
  ],
});
