import { defineConfig } from 'dumi';

// more config: https://d.umijs.org/config
export default defineConfig({
  title: 'OneAPI',
  description: '一个根据 Java 代码生成 API 的工具，不需要后端改代码，也不需要启动后端应用',

  favicon: './favicon.svg',
  logo: './favicon.svg',

  locales: [['zh-CN', '中文']],
  outputPath: 'docs-dist',
  mode: 'site',

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
      title: '项目示例',
      children: [{ title: 'Mall', path: '/example/mall' }],
    },
    {
      title: 'GitHub',
      path: 'https://github.com/tudou527/OneAPI',
    },
  ],

  // google 分析
  analytics: {
    ga: 'G-HL5ZYTV94H',
  },

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
