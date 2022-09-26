import { defineConfig } from 'umi';

export default {
  npmClient: 'pnpm',
  favicons: ['/favicon.svg'],
  title: 'OneAPI - 一个 API 生产工具',
  metas: [
    {
      name: 'keywords',
      content: 'oneapi, swagger, api,'
    },
    {
      name: 'description',
      content: 'OneAPI 通过 AST 分析 Spring 项目源码（Spring Boot/MVC）生成前端消费所需的 API，提供的 CLI 工具也可以与 Git/SVN Hooks 结合帮助你实现 API 生产自动化。相比 Swagger，OneAPI 对后端零接入成本，不需要启动应用。'
    },
  ],
  headScripts: ['window.publicPath = "dist/";'],
  publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  scripts: [
    { src: 'https://www.googletagmanager.com/gtag/js?id=G-HL5ZYTV94H', async: true },
    `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-HL5ZYTV94H');`,
  ],
};
