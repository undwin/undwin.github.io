import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  base: '/undwin.github.io/',
  description: '这是我的第一个 VuePress 站点',
  deion:'基于 umi 的 Ant Design 实战教程',
  plugins:[
      ['vuepress-plugin-yuque', {
      repoUrl: 'https://www.yuque.com/muuc/blog',
    }]
    ]
})