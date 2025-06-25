/*
 * @Author: weisheng
 * @Date: 2025-06-25 21:36:34
 * @LastEditTime: 2025-06-25 22:40:48
 * @LastEditors: weisheng
 * @Description: 
 * @FilePath: /wot-demo-docs/.vitepress/config.mts
 * 记得注释
 */
import { defineConfig } from 'vitepress'
import viteCompression from 'vite-plugin-compression'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
    ],
  },
  srcExclude: ['test_docs/**'],
  title: "Wot Demo",
  description: "⚡️ 基于 vitesse-uni-app 由 vite & uni-app 驱动的、深度整合 Wot UI 组件库的快速启动模板",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c77588a5308ea5813c1d46bdd849338b";
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
      pattern: 'https://github.com/Moonofweisheng/wot-demo-docs/edit/main/:path',
      text: '为此页提供修改建议',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Moonofweisheng/wot-demo' },
      { icon: { svg: '<svg t="1692699544299" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4184" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#6D6D72" p-id="4185"></path></svg>' }, link: "https://gitee.com/wot-design-uni/wot-design-uni", ariaLabel: 'Gitee' },
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: 'A74X2RFXSU',
        apiKey: '6961856d63f5181bf71cb4fa3e4398d2',
        indexName: 'wot-design-uni2',
      },
    },
    footer: {
      message: `Released under the MIT License.`,
      copyright: 'Copyright © 2023-present weisheng',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' },
      { text: 'API 示例', link: '/api-examples' },
      {
        text: '周边生态',
        items: [
          { text: 'Wot UI 组件库', link: 'https://wot-design-uni.cn/' },
          { text: 'Vue3 uni-app路由库', link: 'https://moonofweisheng.github.io/uni-mini-router/' },
          { text: '多平台小程序CI工具', link: 'https://github.com/Moonofweisheng/uni-mini-ci' },
          { text: 'Uni Helper', link: 'https://uni-helper.js.org/' },
        ],
      },
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '起步', link: '/guide/installation' }
        ]
      }
    ],
  }
})
