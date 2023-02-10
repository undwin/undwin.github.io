import { defaultTheme,defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import {searchPlugin} from '@vuepress/plugin-search'
import {copyCodePlugin} from 'vuepress-plugin-copy-code2'

export default {
  lang: 'zh-CN',
  theme:defaultTheme(),
  title: '你好， VuePress ！',
  base: '/undwin.github.io/',
  description: '这是我的第一个 VuePress 站点',
  deion:'基于 umi 的 Ant Design 实战教程',
  plugins:[
     backToTopPlugin(),
      // 搜索插件
    searchPlugin({
      hotKeys: ["ctrl", "k"], //聚焦热键为ctrl+k
    }),
    // 复制代码插件
    copyCodePlugin({
      showInMobile: true, //是否显示在移动端
      pure: true, //复制按钮在代码块右上角
    }),
      ['vuepress-plugin-yuque', {
      repoUrl: 'https://www.yuque.com/muuc/blog',
      authToken:'Enaz3HXg2cM55in5DJ64W32kedkf6r1suImoXghc',
      home: {
        actionText: 'Getting Started →',
        actionLink: '/intro/',
        heroImage: 'https://cdn.nlark.com/yuque/0/2018/png/84868/1535520500482-avatar/20c595c5-ab31-4543-9142-f36cc87c8868.png?x-oss-process=image/resize,m_fill,w_320,h_320',
        footer: `Copyright © 蚂蚁金服体验技术部`
      }
    }]
    ]
}