/*
 * @Author: weisheng
 * @Date: 2025-06-25 21:36:34
 * @LastEditTime: 2025-11-01 17:45:13
 * @LastEditors: weisheng
 * @Description: 
 * @FilePath: /wot-starter-docs/.vitepress/config.mts
 * 记得注释
 */
import { defineConfig } from 'vitepress'
import viteCompression from 'vite-plugin-compression'
import UnoCSS from '@unocss/vite'
import { fileURLToPath, URL } from 'node:url'

import llmstxt from 'vitepress-plugin-llms'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      llmstxt({
        domain: import.meta.env?.VITE_WEB_SITE_BASE_URL || 'https://wot-starter-docs.netlify.app',
      }),
      UnoCSS(),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 5173,
    },
    resolve: {
      alias: [
        {
          find: /^.*\/VPSidebar\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPSidebar.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPContent\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPContent.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPDoc\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPDoc.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPLocalNav\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPLocalNav.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPNavBar\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPNavBar.vue', import.meta.url)
          )
        }
      ]
    }

    
  },
  srcExclude: ['test_docs/**'],
  title: "Wot Starter",
  description: "⚡️ 基于 vitesse-uni-app 由 vite & uni-app 驱动的、深度整合 Wot UI 组件库的快速启动模板",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'algolia-site-verification', content: '223BF8314C40C6AE' }],
    ['script', {}, `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?45a448dc275714ac7c6e31b0f284124e";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
    `]
  ],
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: {
      text: '最后更新'
    },
    editLink: {
      pattern: 'https://github.com/wot-ui/wot-starter-docs/edit/main/:path',
      text: '为此页提供修改建议',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wot-ui/wot-starter' },
      { icon: { svg: '<svg t="1758594913114" class="icon" viewBox="0 0 1316 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5329" width="200" height="200"><path d="M643.181714 247.698286l154.916572-123.172572L643.181714 0.256 643.072 0l-154.660571 124.269714 154.660571 123.245715 0.109714 0.182857z m0 388.461714h0.109715l399.579428-315.245714-108.361143-87.04-291.218285 229.888h-0.146286l-0.109714 0.146285L351.817143 234.093714l-108.251429 87.04 399.433143 315.136 0.146286-0.146285z m-0.146285 215.552l0.146285-0.146286 534.893715-422.034285 108.397714 87.04-243.309714 192L643.145143 1024 10.422857 525.056 0 516.754286l108.251429-86.893715L643.035429 851.748571z" fill="#1E80FF" p-id="5330"></path></svg>' }, link: 'https://juejin.cn/user/26044011388510/posts' },
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: 'ITS8LMWRYB',
        apiKey: '259280bc7bfdf1686586ed7680c68a4c',
        indexName: 'wot_demo_docs_netlify_app_its8lmwryb_pages',
      },
    },
    footer: {
      message: `Released under the MIT License.`,
      copyright: 'Copyright © 2025-present Wot UI Team and contributors' ,
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/installation' },
      { text: 'Wot UI', link: 'https://wot-ui.cn/' },
      { text: '博客', link: 'https://blog.wot-ui.cn/' },
      { text: 'Uni Helper', link: 'https://uni-helper.js.org/' },
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '咨询', link: '/guide/consultation' },
          { text: '起步', link: '/guide/installation' },
          { text: '核心库', link: '/guide/uni-helper' },
          { text: '组件库', link: '/guide/wot-ui' },
          { text: '样式', link: '/guide/styling' },
          { text: '路由', link: '/guide/router' },
          { text: '网络请求', link: '/guide/request' },
          { text: '状态管理', link: '/guide/state-management' },
          { text: '全局反馈组件', link: '/guide/feedback' },
          { text: '图标', link: '/guide/icons' },
          { text: '暗黑模式', link: '/guide/dark-mode' },
          { text: '自定义 Tabbar', link: '/guide/tabbar' },
          { text: '部署', link: '/guide/deployment' },
          { text: '分包优化', link: '/guide/bundle-optimizer' },
          { text: '虚拟根组件', link: '/guide/uni-ku-root' },
          { text: 'Echarts 图表', link: '/guide/uni-echarts' },
          { text: '国际化', link: '/guide/i18n' },

        ]
      },
    ],
  }
})
