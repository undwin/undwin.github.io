import { defaultTheme,defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress1 ！',
  base: '/undwin.github.io/',
  description: '这是我的第一个 VuePress 站点',
  deion:'基于 umi 的 Ant Design 实战教程',
  plugins:[
     backToTopPlugin()
    ]
})