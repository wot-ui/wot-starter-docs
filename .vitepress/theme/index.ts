/*
 * @Author: weisheng
 * @Date: 2024-10-12 22:09:33
 * @LastEditTime: 2025-10-30 14:06:33
 * @LastEditors: weisheng
 * @Description: 
 * @FilePath: /wot-demo-docs/.vitepress/theme/index.ts
 * 记得注释
 */
import { h } from 'vue'
import Theme from 'vitepress/theme'
import 'uno.css'
import './styles/vars.css'
import './styles/custom.css'
import './styles/scrollbar.css'

// 导入组件
import SvgImage from './components/SvgImage.vue'
import HomeStar from './components/HomeStar.vue'
import VPIframe from './components/VPIframe.vue'
import WwAds from './components/WwAds.vue'
import Banner from './components/Banner.vue'


export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      // 在首页 hero 部分信息后添加 star 徽章
      'home-hero-info-after': () => h(HomeStar),
      'layout-top': () => h(Banner),
      'aside-outline-after': () => h(WwAds),
    })
  },
  enhanceApp({ app }: { app: any }) {
    // 注册全局组件
    app.component('SvgImage', SvgImage)
    app.component('VPIframe', VPIframe)
  },
}
