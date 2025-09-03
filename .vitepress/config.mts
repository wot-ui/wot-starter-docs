/*
 * @Author: weisheng
 * @Date: 2025-06-25 21:36:34
 * @LastEditTime: 2025-09-03 21:18:34
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
      { text: 'Uni Helper', link: 'https://uni-helper.js.org/' },
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text:'咨询', link: '/guide/consultation' },
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
          { text: '分包优化', link: '/guide/bundle-optimizer' }
        ]
      },
    ],
  }
})
